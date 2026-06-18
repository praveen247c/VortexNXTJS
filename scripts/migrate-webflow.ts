/**
 * One-time migration: Webflow CMS blog -> Sanity.
 *
 * Usage:
 *   1. Fill .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 *      SANITY_API_WRITE_TOKEN (Editor), WEBFLOW_API_TOKEN, WEBFLOW_SITE_ID.
 *   2. npx tsx scripts/migrate-webflow.ts            (dry run, no writes)
 *      npx tsx scripts/migrate-webflow.ts --commit   (actually write to Sanity)
 *
 * It is idempotent: posts/categories/authors use deterministic _ids, so re-runs
 * update in place instead of creating duplicates.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { createClient } from "@sanity/client";
import { htmlToBlocks } from "@sanity/block-tools";
import { Schema } from "@sanity/schema";
import { JSDOM } from "jsdom";

// ---------------------------------------------------------------------------
// Field-name candidates. Webflow field slugs differ per site — these cover the
// common defaults. Adjust if the dry-run log shows your fields are named
// differently.
// ---------------------------------------------------------------------------
const BODY_FIELDS = ["main-article", "post-body", "body", "content", "rich-text", "article-body"];
const EXCERPT_FIELDS = ["introduction-paragraph", "post-summary", "summary", "excerpt", "subtitle", "intro"];
const SEO_DESC_FIELDS = ["meta-description", "seo-description", "meta-desc"];
const COVER_FIELDS = ["main-photo", "main-image", "thumbnail-image", "cover-image", "thumbnail", "image", "featured-image"];
const DATE_FIELDS = ["published-date", "published-on", "date", "publish-date"];
const CATEGORY_FIELDS = ["category", "categories", "blog-category", "tag"];
const AUTHOR_FIELDS = ["author", "writer", "post-author"];

// ---------------------------------------------------------------------------
// env
// ---------------------------------------------------------------------------
function loadEnv() {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    /* no .env.local — rely on real env */
  }
}
loadEnv();

const COMMIT = process.argv.includes("--commit");
// Optional `--limit N` to process only the first N posts (test batches).
const limitArg = process.argv.find((a) => a.startsWith("--limit"));
const LIMIT = limitArg
  ? Number(limitArg.split("=")[1] ?? process.argv[process.argv.indexOf(limitArg) + 1])
  : Infinity;

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID: projectId,
  NEXT_PUBLIC_SANITY_DATASET: dataset,
  NEXT_PUBLIC_SANITY_API_VERSION: apiVersion = "2024-10-01",
  SANITY_API_WRITE_TOKEN: token,
  WEBFLOW_API_TOKEN: wfToken,
  WEBFLOW_SITE_ID: wfSiteId,
  WEBFLOW_BLOG_COLLECTION_ID: wfCollectionId,
} = process.env;

function requireEnv(name: string, value: string | undefined) {
  if (!value || value === "placeholder") {
    console.error(`✗ Missing required env var: ${name}`);
    process.exit(1);
  }
  return value;
}

requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID", projectId);
requireEnv("NEXT_PUBLIC_SANITY_DATASET", dataset);
requireEnv("WEBFLOW_API_TOKEN", wfToken);
// WEBFLOW_SITE_ID is optional — auto-discovered from the token if omitted.
if (COMMIT) requireEnv("SANITY_API_WRITE_TOKEN", token);

const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Webflow Data API v2 helpers
// ---------------------------------------------------------------------------
const WF = "https://api.webflow.com/v2";

async function wf<T>(path: string): Promise<T> {
  const res = await fetch(`${WF}${path}`, {
    headers: {
      Authorization: `Bearer ${wfToken}`,
      "accept-version": "2.0.0",
    },
  });
  if (!res.ok) {
    throw new Error(`Webflow ${path} -> ${res.status} ${await res.text()}`);
  }
  return res.json() as Promise<T>;
}

type WfCollection = { id: string; displayName: string; slug: string };
type WfItem = {
  id: string;
  lastPublished?: string;
  createdOn?: string;
  fieldData: Record<string, unknown>;
};

async function getAllItems(collectionId: string): Promise<WfItem[]> {
  const items: WfItem[] = [];
  let offset = 0;
  const limit = 100;
  // Prefer published items; fall back to staged.
  for (const suffix of ["/items/live", "/items"]) {
    try {
      while (true) {
        const data = await wf<{
          items: WfItem[];
          pagination: { total: number };
        }>(`/collections/${collectionId}${suffix}?limit=${limit}&offset=${offset}`);
        items.push(...data.items);
        offset += limit;
        if (offset >= (data.pagination?.total ?? 0)) break;
      }
      if (items.length) return items;
    } catch {
      offset = 0; // try the next endpoint
    }
  }
  return items;
}

// ---------------------------------------------------------------------------
// HTML -> Portable Text (with inline image upload)
// ---------------------------------------------------------------------------
const blockSchema = Schema.compile({
  name: "default",
  types: [
    {
      name: "post",
      type: "document",
      fields: [
        {
          name: "body",
          type: "array",
          of: [{ type: "block" }, { type: "image" }],
        },
      ],
    },
  ],
});
const blockContentType = blockSchema
  .get("post")
  .fields.find((f: { name: string }) => f.name === "body").type;

const assetCache = new Map<string, string | null>();

async function uploadImage(url: string): Promise<string | null> {
  if (assetCache.has(url)) return assetCache.get(url)!;
  if (!COMMIT) {
    assetCache.set(url, "dry-run-asset-id");
    return "dry-run-asset-id";
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const filename = url.split("/").pop()?.split("?")[0] || "image";
    const asset = await sanity.assets.upload("image", buf, { filename });
    assetCache.set(url, asset._id);
    return asset._id;
  } catch (err) {
    console.warn(`   ! image upload failed (${url}): ${(err as Error).message}`);
    assetCache.set(url, null);
    return null;
  }
}

async function htmlToPortableText(html: string) {
  // Pre-upload every <img> so the (synchronous) block-tools rule can reference it.
  const dom = new JSDOM(html);
  const imgs = Array.from(dom.window.document.querySelectorAll("img"));
  const srcToAsset = new Map<string, string>();
  for (const img of imgs) {
    const src = img.getAttribute("src");
    if (!src || srcToAsset.has(src)) continue;
    const id = await uploadImage(src);
    if (id) srcToAsset.set(src, id);
  }

  return htmlToBlocks(html, blockContentType, {
    parseHtml: (h) => new JSDOM(h).window.document,
    rules: [
      {
        deserialize(el, _next, block) {
          const node = el as unknown as HTMLElement;
          if (node.nodeName?.toLowerCase() !== "img") return undefined;
          const src = node.getAttribute?.("src");
          const assetId = src ? srcToAsset.get(src) : undefined;
          if (!assetId) return undefined;
          return block({
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
            alt: node.getAttribute?.("alt") || undefined,
          });
        },
      },
    ],
  });
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
function pick(fieldData: Record<string, unknown>, keys: string[]): unknown {
  for (const k of keys) if (fieldData[k] != null) return fieldData[k];
  return undefined;
}

function asString(v: unknown): string | undefined {
  if (typeof v === "string") return v;
  return undefined;
}

function imageUrl(v: unknown): string | undefined {
  if (typeof v === "string") return v;
  if (v && typeof v === "object" && "url" in v) return (v as { url?: string }).url;
  return undefined;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

// Excerpt/SEO fields are plain strings — strip any HTML the rich field carries.
function toPlainText(v: unknown): string | undefined {
  const s = asString(v);
  if (!s) return undefined;
  const text = s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text || undefined;
}

// Resolve Webflow reference ids -> human names across all collections.
const idToName = new Map<string, string>();

async function buildIdNameMap(collections: WfCollection[]) {
  for (const col of collections) {
    try {
      const items = await getAllItems(col.id);
      for (const it of items) {
        const name = asString(it.fieldData.name);
        if (name) idToName.set(it.id, name);
      }
    } catch {
      /* ignore */
    }
  }
}

function resolveRefName(v: unknown): string | undefined {
  if (typeof v === "string") return idToName.get(v) || v;
  if (Array.isArray(v) && v.length) return resolveRefName(v[0]);
  return undefined;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
async function main() {
  console.log(
    `\n${COMMIT ? "⚙️  COMMIT mode — writing to Sanity" : "🔍 DRY RUN — no writes (pass --commit to apply)"}\n`
  );

  // Resolve the site id (auto-discover from the token if not provided).
  let siteId = wfSiteId;
  if (!siteId) {
    const { sites } = await wf<{ sites: { id: string; displayName: string }[] }>(
      "/sites"
    );
    if (sites.length === 1) {
      siteId = sites[0].id;
      console.log(`Auto-detected site: ${sites[0].displayName} (${siteId})\n`);
    } else {
      console.error("Multiple Webflow sites found — set WEBFLOW_SITE_ID to one of:");
      sites.forEach((s) => console.error(`  ${s.displayName}: ${s.id}`));
      process.exit(1);
    }
  }

  const { collections } = await wf<{ collections: WfCollection[] }>(
    `/sites/${siteId}/collections`
  );
  console.log("Webflow collections:");
  collections.forEach((c) => console.log(`  - ${c.displayName} (slug: ${c.slug}, id: ${c.id})`));

  const blog =
    collections.find((c) => c.id === wfCollectionId) ||
    collections.find((c) => /blog|post|article/i.test(c.slug + c.displayName));
  if (!blog) {
    console.error("\n✗ Could not find a blog collection. Set WEBFLOW_BLOG_COLLECTION_ID.");
    process.exit(1);
  }
  console.log(`\n→ Using collection: ${blog.displayName} (${blog.id})`);

  await buildIdNameMap(collections);

  const allItems = await getAllItems(blog.id);
  const items = Number.isFinite(LIMIT) ? allItems.slice(0, LIMIT) : allItems;
  console.log(
    `→ Found ${allItems.length} items${
      Number.isFinite(LIMIT) ? ` (processing first ${items.length})` : ""
    }\n`
  );

  if (items[0]) {
    console.log("Sample field keys:", Object.keys(items[0].fieldData).join(", "), "\n");
  }

  const categoryIds = new Set<string>();
  const authorIds = new Set<string>();
  let created = 0;

  for (const item of items) {
    const fd = item.fieldData;
    const title = asString(fd.name) || "Untitled";
    const slug = asString(fd.slug) || slugify(title);
    const postId = `post-${slug}`;

    const html = asString(pick(fd, BODY_FIELDS)) || "";
    const body = html ? await htmlToPortableText(html) : [];

    const excerpt = toPlainText(pick(fd, EXCERPT_FIELDS));
    const seoDescription = toPlainText(pick(fd, SEO_DESC_FIELDS));
    const cover = imageUrl(pick(fd, COVER_FIELDS));
    const publishedAt =
      asString(pick(fd, DATE_FIELDS)) || item.lastPublished || item.createdOn;

    const categoryName = resolveRefName(pick(fd, CATEGORY_FIELDS));
    const authorName = resolveRefName(pick(fd, AUTHOR_FIELDS));

    const doc: { _id: string; _type: string; [key: string]: unknown } = {
      _id: postId,
      _type: "post",
      title,
      slug: { _type: "slug", current: slug },
      ...(excerpt ? { excerpt } : {}),
      ...(seoDescription ? { seoDescription } : {}),
      ...(publishedAt ? { publishedAt: new Date(publishedAt).toISOString() } : {}),
      body,
    };

    if (cover) {
      const assetId = await uploadImage(cover);
      if (assetId && assetId !== "dry-run-asset-id") {
        doc.coverImage = {
          _type: "image",
          asset: { _type: "reference", _ref: assetId },
          alt: title,
        };
      }
    }

    if (categoryName) {
      const catId = `category-${slugify(categoryName)}`;
      doc.category = { _type: "reference", _ref: catId };
      if (!categoryIds.has(catId)) {
        categoryIds.add(catId);
        if (COMMIT) {
          await sanity.createOrReplace({
            _id: catId,
            _type: "category",
            title: categoryName,
            slug: { _type: "slug", current: slugify(categoryName) },
          });
        }
      }
    }

    if (authorName) {
      const aId = `author-${slugify(authorName)}`;
      doc.author = { _type: "reference", _ref: aId };
      if (!authorIds.has(aId)) {
        authorIds.add(aId);
        if (COMMIT) {
          await sanity.createOrReplace({
            _id: aId,
            _type: "author",
            name: authorName,
            slug: { _type: "slug", current: slugify(authorName) },
          });
        }
      }
    }

    if (COMMIT) {
      await sanity.createOrReplace(doc);
      console.log(`  ✓ ${title}`);
    } else {
      console.log(
        `  · ${title}  [blocks: ${body.length}, cover: ${cover ? "yes" : "no"}, excerpt: ${excerpt ? "yes" : "no"}, category: ${categoryName ?? "—"}, author: ${authorName ?? "—"}]`
      );
    }
    created++;
  }

  console.log(
    `\n${COMMIT ? "Done" : "Dry run complete"}: ${created} posts, ${categoryIds.size} categories, ${authorIds.size} authors.`
  );
  if (!COMMIT) console.log("Re-run with --commit to write to Sanity.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
