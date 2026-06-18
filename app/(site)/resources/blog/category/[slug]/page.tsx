import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PostFeed, { type PostCard } from "@/components/PostFeed";
import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  categorySlugsQuery,
  postsByCategoryQuery,
} from "@/sanity/lib/queries";

export const revalidate = 60;

type Category = { title: string; slug: string; description?: string };

async function getCategory(slug: string): Promise<Category | null> {
  try {
    return await client.fetch<Category | null>(categoryBySlugQuery, { slug });
  } catch {
    return null;
  }
}

async function getPosts(slug: string): Promise<PostCard[]> {
  try {
    return await client.fetch<PostCard[]>(postsByCategoryQuery, { slug });
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(categorySlugsQuery);
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
  const category = await getCategory(slug);
  if (!category) return { title: "Blog · Vortex IQ" };
  return {
    title: `${category.title} · Vortex IQ Blog`,
    description: category.description || `Articles in ${category.title}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, posts] = await Promise.all([getCategory(slug), getPosts(slug)]);
  if (!category) notFound();

  return (
    <main>
      <section className="section section--hero">
        <div className="container">
          <Link className="textlink reveal in" href="/resources/blog">
            &larr; All posts
          </Link>
          <h1 className="reveal in" style={{ marginTop: "1.6rem" }}>
            {category.title}
          </h1>
          {category.description ? (
            <p className="lede reveal in" style={{ marginTop: "1.4rem" }}>
              {category.description}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          {posts.length === 0 ? (
            <p className="lede muted">No posts in this category yet.</p>
          ) : (
            <PostFeed posts={posts} />
          )}
        </div>
      </section>
    </main>
  );
}
