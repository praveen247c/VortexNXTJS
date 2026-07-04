import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";

import PortableText from "@/components/PortableText";
import JsonLd from "@/components/JsonLd";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { blogPostingLd, breadcrumbLd } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/site";
import { pageOpenGraph, seoTitle, truncateDescription } from "@/lib/seo";

export const revalidate = 60;

type SanityImage = { asset?: { _ref: string }; alt?: string };

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  _updatedAt?: string;
  coverImage?: SanityImage;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  seoOgImage?: SanityImage;
  seoCanonicalUrl?: string;
  seoNoIndex?: boolean;
  category?: { title?: string; slug?: string } | null;
  author?: { name?: string; bio?: string } | null;
};

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch<Post | null>(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(postSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Blog · Vortex IQ" };

  const title = seoTitle(post.seoTitle || post.title);
  const rawDescription = post.seoDescription || post.excerpt;
  const description = rawDescription ? truncateDescription(rawDescription) : undefined;
  const path = `/resources/blog/${slug}`;
  const ogImage = post.seoOgImage?.asset
    ? urlForImage(post.seoOgImage).width(1200).height(630).fit("crop").url()
    : post.coverImage?.asset
      ? urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()
      : "/og/default.png";

  return {
    title,
    description,
    alternates: { canonical: post.seoCanonicalUrl || path },
    robots: post.seoNoIndex ? { index: false, follow: false } : undefined,
    openGraph: pageOpenGraph({ title, description: description ?? "", type: "article", path, image: { url: ogImage, width: 1200, height: 630 } }),
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const ogImageUrl = post.coverImage?.asset
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : absoluteUrl("/og/default.png");

  // The page already renders the title as the H1, but migrated Webflow bodies
  // often lead with their own H1 (the SEO title), so the title shows twice.
  // Drop H1 blocks from the body; in-body headings should start at H2.
  const body = (post.body ?? []).filter(
    (block) => !("style" in block && (block as { style?: string }).style === "h1")
  );

  return (
    <main>
      <JsonLd
        data={blogPostingLd({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          image: ogImageUrl,
          datePublished: post.publishedAt,
          dateModified: post._updatedAt,
          authorName: post.author?.name,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blog" },
          { name: post.title, path: `/resources/blog/${post.slug}` },
        ])}
      />
      <article className="section section--hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <Link className="textlink reveal in" href="/resources/blog">
            &larr; Back to blog
          </Link>

          <h1 className="reveal in" style={{ marginTop: "1.6rem" }}>
            {post.title}
          </h1>
          <div className="post-meta reveal in">
            {post.category?.title ? (
              <span className="post-meta-cat">
                <Link href={`/resources/blog/category/${post.category.slug}`}>
                  {post.category.title}
                </Link>
              </span>
            ) : null}
            {post.author?.name ? <span>{post.author.name}</span> : null}
            {post.publishedAt ? (
              <span>{formatDate(post.publishedAt)}</span>
            ) : null}
          </div>

          {post.coverImage?.asset ? (
            <div className="post-cover reveal in">
              <Image
                src={urlForImage(post.coverImage).width(1640).height(920).url()}
                alt={post.coverImage.alt || post.title}
                width={1640}
                height={920}
                priority
                sizes="(max-width: 860px) 100vw, 820px"
              />
            </div>
          ) : null}

          <div className="prose reveal in">
            {body.length ? <PortableText value={body} /> : null}
          </div>
        </div>
      </article>
    </main>
  );
}
