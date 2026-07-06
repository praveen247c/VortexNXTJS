import { CONNECTORS, CONNECTOR_CATEGORIES, CONNECTOR_STATS } from "@/app/(site)/solutions/integrations/connectors";
import { caseStudies } from "@/app/(site)/customer-stories/case-studies";
import { comparisons } from "@/app/(site)/vs/comparisons";
import { policies } from "@/app/(site)/trust/policies";
import { computeRoi, type RoiInputs } from "./roi";

export interface ToolResult {
  content: { type: "text"; text: string }[];
  [key: string]: unknown;
}

function text(t: string): ToolResult {
  return { content: [{ type: "text", text: t }] };
}

// --- 1. Connector / integration directory (236 real entries, 19 categories) ---

export function searchConnectors(args: { query?: string; category?: string }): ToolResult {
  const needle = args.query?.toLowerCase().trim();
  const cat = args.category?.toLowerCase().trim();

  let results = CONNECTORS;
  if (cat) {
    results = results.filter((c) => c.category.toLowerCase() === cat);
  }
  if (needle) {
    results = results.filter(
      (c) => c.name.toLowerCase().includes(needle) || c.desc.toLowerCase().includes(needle)
    );
  }

  return text(
    JSON.stringify(
      {
        stats: CONNECTOR_STATS,
        matched: results.length,
        results: results.slice(0, 40),
      },
      null,
      2
    )
  );
}

export function listConnectorCategories(): ToolResult {
  return text(JSON.stringify({ stats: CONNECTOR_STATS, categories: CONNECTOR_CATEGORIES }, null, 2));
}

// --- 2. Blog (Sanity CMS) ---

export async function searchBlogPosts(args: { query?: string; category?: string }): Promise<ToolResult> {
  try {
    const { client } = await import("@/sanity/lib/client");
    const { postsQuery, postsByCategoryQuery } = await import("@/sanity/lib/queries");

    const posts = args.category
      ? await client.fetch(postsByCategoryQuery, { slug: args.category })
      : await client.fetch(postsQuery);

    const needle = args.query?.toLowerCase().trim();
    const filtered = needle
      ? (posts as any[]).filter(
          (p) => p.title?.toLowerCase().includes(needle) || p.excerpt?.toLowerCase().includes(needle)
        )
      : posts;

    return text(JSON.stringify(filtered.slice(0, 20), null, 2));
  } catch (err) {
    return text(
      `Blog search unavailable: Sanity isn't configured (set NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in .env.local). ${
        err instanceof Error ? err.message : String(err)
      }`
    );
  }
}

export async function getBlogPost(args: { slug: string }): Promise<ToolResult> {
  try {
    const { client } = await import("@/sanity/lib/client");
    const { postBySlugQuery } = await import("@/sanity/lib/queries");
    const post = await client.fetch(postBySlugQuery, { slug: args.slug });
    return text(post ? JSON.stringify(post, null, 2) : `No post found with slug "${args.slug}".`);
  } catch (err) {
    return text(
      `Blog lookup unavailable: Sanity isn't configured. ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

// --- 3. ROI calculator (real formula from RoiCalculator.tsx) ---

export function calculateRoi(args: RoiInputs): ToolResult {
  const r = computeRoi(args);
  const sym = args.cur === "GBP" ? "£" : "$";
  const fmt = (n: number) => sym + Math.round(n).toLocaleString("en-US");

  return text(
    `Annual direct cost/time recovered: ${fmt(r.directLow)}–${fmt(r.directHigh)}. ` +
      `Organic-influenced revenue in scope: ${fmt(r.orgLow)}–${fmt(r.orgHigh)}/yr. ` +
      `Estimated SEO-relevant pages: ${r.seoPages}. Full breakdown: ${JSON.stringify(r)}`
  );
}

// --- 4. Brochure request (real API route -> HubSpot) ---

export async function submitBrochureRequest(args: {
  name: string;
  email: string;
  company: string;
}): Promise<ToolResult> {
  try {
    const res = await fetch("/api/brochure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: args.name,
        email: args.email,
        company: args.company,
        pageUri: window.location.href,
        pageName: document.title,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) {
      return text(`Brochure request submitted for ${args.email} (${args.company}).`);
    }
    return text(
      `Brochure request not completed (${res.status}): ${data.error ?? "unknown error"}. ` +
        `If this says "not-configured", HUBSPOT_BROCHURE_FORM_GUID isn't set in .env.local.`
    );
  } catch (err) {
    return text(`Brochure request failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// --- 5. Competitor comparisons ---

export function listComparisons(): ToolResult {
  return text(
    JSON.stringify(
      comparisons.map((c) => ({ slug: c.slug, name: c.name, category: c.category, oneLiner: c.oneLiner })),
      null,
      2
    )
  );
}

export function getComparison(args: { slug: string }): ToolResult {
  const c = comparisons.find((c) => c.slug === args.slug);
  if (!c) {
    return text(`No comparison for "${args.slug}". Known: ${comparisons.map((c) => c.slug).join(", ")}.`);
  }
  return text(JSON.stringify(c, null, 2));
}

// --- 6. Trust / compliance policies ---

export function listTrustPolicies(): ToolResult {
  return text(JSON.stringify(policies.map((p) => ({ slug: p.slug, title: p.title, blurb: p.blurb })), null, 2));
}

export function getTrustPolicy(args: { slug: string }): ToolResult {
  const p = policies.find((p) => p.slug === args.slug);
  if (!p) {
    return text(`No policy for "${args.slug}". Known: ${policies.map((p) => p.slug).join(", ")}.`);
  }
  return text(JSON.stringify(p, null, 2));
}

// --- 7. Pricing (real rendered DOM - same page.tsx/content.ts markup as the WebMCP replica) ---

export function getPricingPlans(): ToolResult {
  const cards = Array.from(document.querySelectorAll(".plan"));
  if (!cards.length) {
    return text("No pricing plans on this page. This tool only applies on the /pricing page.");
  }
  const plans = cards.map((card) => ({
    name: card.querySelector("h3")?.textContent?.trim(),
    tagline: card.querySelector(".tagline")?.textContent?.trim(),
    price: card.querySelector(".price")?.textContent?.trim(),
    per: card.querySelector(".per")?.textContent?.trim(),
    billed: card.querySelector(".billed")?.textContent?.trim(),
    features: Array.from(card.querySelectorAll(".feats li")).map((li) => li.textContent?.trim()),
  }));
  return text(JSON.stringify(plans, null, 2));
}

export function comparePlans(args: { planA: string; planB: string }): ToolResult {
  const cards = Array.from(document.querySelectorAll(".plan"));
  const read = (name: string) => {
    const card = cards.find((c) => c.querySelector("h3")?.textContent?.trim().toLowerCase() === name.toLowerCase());
    if (!card) return null;
    return {
      name: card.querySelector("h3")?.textContent?.trim(),
      price: card.querySelector(".price")?.textContent?.trim(),
      features: Array.from(card.querySelectorAll(".feats li")).map((li) => li.textContent?.trim()),
    };
  };
  const a = read(args.planA);
  const b = read(args.planB);
  if (!a || !b) {
    const known = cards.map((c) => c.querySelector("h3")?.textContent?.trim());
    return text(`Couldn't find both plans on this page. Known: ${known.join(", ")}.`);
  }
  return text(JSON.stringify({ a, b }, null, 2));
}

export function setBillingPeriod(args: { period: "monthly" | "annual" }): ToolResult {
  const btn = document.getElementById(args.period === "monthly" ? "bMonthly" : "bAnnual") as HTMLButtonElement | null;
  if (!btn) {
    return text("No billing toggle on this page. This tool only applies on the /pricing page.");
  }
  btn.click();
  return text(`Billing period set to ${args.period}.`);
}

// --- 8. Customer stories / case studies (static, structured, 6 real entries) ---

export function searchCaseStudies(args: { query?: string }): ToolResult {
  const rows = caseStudies.map((c) => ({
    slug: c.slug,
    company: c.company,
    eyebrow: c.eyebrow,
    title: c.title,
    metrics: c.metrics,
  }));

  if (!args.query) return text(JSON.stringify(rows, null, 2));

  const needle = args.query.toLowerCase();
  const matches = rows.filter((r) => JSON.stringify(r).toLowerCase().includes(needle));
  return text(
    matches.length
      ? JSON.stringify(matches, null, 2)
      : `No case study matches "${args.query}". Known companies: ${rows.map((r) => r.company).join(", ")}.`
  );
}

export function getCaseStudy(args: { slug: string }): ToolResult {
  const c = caseStudies.find((c) => c.slug === args.slug);
  if (!c) {
    return text(`No case study for "${args.slug}". Known: ${caseStudies.map((c) => c.slug).join(", ")}.`);
  }
  return text(JSON.stringify(c, null, 2));
}

// --- tool registry ---

const comparisonSlugs = comparisons.map((c) => c.slug) as [string, ...string[]];
const policySlugs = policies.map((p) => p.slug) as [string, ...string[]];
const caseStudySlugs = caseStudies.map((c) => c.slug) as [string, ...string[]];
const connectorCategoryKeys = CONNECTOR_CATEGORIES.map((c) => c.key) as [string, ...string[]];

export const TOOL_SPECS = [
  {
    name: "search_connectors",
    description: `Search the real ${CONNECTOR_STATS.total}-connector integration directory by keyword and/or category.`,
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keyword to match against connector name/description" },
        category: { type: "string", enum: connectorCategoryKeys },
      },
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "list_connector_categories",
    description: "List the real connector categories and total/live/documented counts.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false } as const,
    readOnlyHint: true,
  },
  {
    name: "search_blog_posts",
    description: "Search Vortex IQ blog posts (Sanity CMS) by keyword and/or category slug.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        category: { type: "string", description: "Category slug to filter by" },
      },
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "get_blog_post",
    description: "Get a single blog post's full content by slug (Sanity CMS).",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string" } },
      required: ["slug"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "calculate_roi",
    description:
      "Run the real Vortex IQ ROI calculator formula (same as /roi-calculator) given revenue, catalog size, content/reporting cadence and deploy risk.",
    inputSchema: {
      type: "object",
      properties: {
        cur: { type: "string", enum: ["USD", "GBP"] },
        revenue: { type: "number", minimum: 0, description: "Average monthly store revenue" },
        products: { type: "number", minimum: 0, description: "Number of products in the catalog" },
        articles: { type: "number", minimum: 0, description: "SEO/GEO articles published per month" },
        reportHours: { type: "number", minimum: 0, description: "Hours/week spent on manual reporting" },
        connectors: { type: "number", minimum: 0, description: "Number of connectors/integrations in use" },
        deploys: { type: "number", minimum: 0, description: "Deploys per month" },
        deployCost: { type: "number", minimum: 0, description: "Estimated cost of one failed deploy" },
      },
      required: ["cur", "revenue", "products", "articles", "reportHours", "connectors", "deploys", "deployCost"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "submit_brochure_request",
    description:
      "Submit a real brochure request via /api/brochure (creates/updates a HubSpot contact and fires the brochure email workflow — a genuine external side effect, only works if HUBSPOT_BROCHURE_FORM_GUID is configured).",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        company: { type: "string" },
      },
      required: ["name", "email", "company"],
      additionalProperties: false,
    } as const,
    readOnlyHint: false,
  },
  {
    name: "list_comparisons",
    description: "List the real 'Vortex IQ vs X' competitor comparison pages available.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false } as const,
    readOnlyHint: true,
  },
  {
    name: "get_comparison",
    description: "Get the full feature-by-feature comparison matrix for one competitor.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", enum: comparisonSlugs } },
      required: ["slug"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "list_trust_policies",
    description: "List real trust/compliance policies (sub-processors, data retention, DPA terms, etc).",
    inputSchema: { type: "object", properties: {}, additionalProperties: false } as const,
    readOnlyHint: true,
  },
  {
    name: "get_trust_policy",
    description: "Get the full content of one trust/compliance policy by slug.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", enum: policySlugs } },
      required: ["slug"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "get_pricing_plans",
    description: "Pricing page only: read the real current plan cards (name/price/features).",
    inputSchema: { type: "object", properties: {}, additionalProperties: false } as const,
    readOnlyHint: true,
  },
  {
    name: "compare_plans",
    description: "Pricing page only: full feature list of two named plans, side by side.",
    inputSchema: {
      type: "object",
      properties: {
        planA: { type: "string", enum: ["Foundation", "Growth", "Enterprise", "OmniChannel"] },
        planB: { type: "string", enum: ["Foundation", "Growth", "Enterprise", "OmniChannel"] },
      },
      required: ["planA", "planB"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "set_billing_period",
    description: "Pricing page only: toggle the real billing period control between monthly and annual.",
    inputSchema: {
      type: "object",
      properties: { period: { type: "string", enum: ["monthly", "annual"] } },
      required: ["period"],
      additionalProperties: false,
    } as const,
    readOnlyHint: false,
  },
  {
    name: "search_case_studies",
    description: "List or keyword-search the real customer case studies (company, metrics, slug).",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
  {
    name: "get_case_study",
    description: "Get one full case study (metrics, quotes, body) by slug.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", enum: caseStudySlugs } },
      required: ["slug"],
      additionalProperties: false,
    } as const,
    readOnlyHint: true,
  },
] as const;

export type ToolName = (typeof TOOL_SPECS)[number]["name"];

export async function callTool(name: ToolName, args: Record<string, unknown>): Promise<ToolResult> {
  switch (name) {
    case "search_connectors":
      return searchConnectors(args as any);
    case "list_connector_categories":
      return listConnectorCategories();
    case "search_blog_posts":
      return searchBlogPosts(args as any);
    case "get_blog_post":
      return getBlogPost(args as any);
    case "calculate_roi":
      return calculateRoi(args as any);
    case "submit_brochure_request":
      return submitBrochureRequest(args as any);
    case "list_comparisons":
      return listComparisons();
    case "get_comparison":
      return getComparison(args as any);
    case "list_trust_policies":
      return listTrustPolicies();
    case "get_trust_policy":
      return getTrustPolicy(args as any);
    case "get_pricing_plans":
      return getPricingPlans();
    case "compare_plans":
      return comparePlans(args as any);
    case "set_billing_period":
      return setBillingPeriod(args as any);
    case "search_case_studies":
      return searchCaseStudies(args as any);
    case "get_case_study":
      return getCaseStudy(args as any);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
