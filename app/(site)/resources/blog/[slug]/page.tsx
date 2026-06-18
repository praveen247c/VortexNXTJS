import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";

import PortableText from "@/components/PortableText";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: { asset?: { _ref: string }; alt?: string };
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
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
  return {
    title: `${post.seoTitle || post.title} · Vortex IQ`,
    description: post.seoDescription || post.excerpt,
    openGraph: post.coverImage?.asset
      ? { images: [urlForImage(post.coverImage).width(1200).height(630).url()] }
      : undefined,
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

  return (
    <main>
      <article className="section section--hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <Link className="textlink reveal in" href="/resources/blog">
            &larr; Back to blog
          </Link>

          <div
            className="eyebrow reveal in"
            style={{ marginTop: "1.6rem" }}
          >
            {post.category?.title || "Article"}
          </div>
          <h1 className="reveal in" style={{ marginTop: "1rem" }}>
            {post.title}
          </h1>
          <div className="post-meta reveal in">
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
            {post.body ? <PortableText value={post.body} /> : null}
          </div>
        </div>
      </article>
    </main>
  );
}
