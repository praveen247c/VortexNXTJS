import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog & News · Vortex IQ",
  description: "Product updates, insights and news from Vortex IQ.",
};

// Revalidate the index every minute (ISR). The optional /api/revalidate
// webhook makes publishes appear instantly.
export const revalidate = 60;

type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: { asset?: { _ref: string }; alt?: string };
  category?: { title?: string; slug?: string } | null;
  author?: { name?: string } | null;
};

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getPosts(): Promise<PostCard[]> {
  try {
    return await client.fetch<PostCard[]>(postsQuery);
  } catch {
    // Sanity not configured yet (placeholder project id) — render empty state.
    return [];
  }
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <main>
      <section className="section section--hero">
        <div className="container">
          <div className="eyebrow reveal in">Resources</div>
          <h1 className="reveal in" style={{ marginTop: "1rem" }}>
            Blog &amp; News
          </h1>
          <p className="lede reveal in" style={{ marginTop: "1.4rem" }}>
            Product updates, insights and news from the team building the AI
            Operating System for e-commerce.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          {posts.length === 0 ? (
            <p className="lede muted reveal in">
              No articles yet. New posts will appear here as soon as they&apos;re
              published.
            </p>
          ) : (
            <div className="grid g-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  className="bcard reveal in"
                  href={`/resources/blog/${post.slug}`}
                >
                  <div className="cover">
                    {post.category?.title ? (
                      <span className="bcard-cat">{post.category.title}</span>
                    ) : null}
                    {post.coverImage?.asset ? (
                      <Image
                        src={urlForImage(post.coverImage)
                          .width(800)
                          .height(500)
                          .url()}
                        alt={post.coverImage.alt || post.title}
                        width={800}
                        height={500}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="bcard-noimg" />
                    )}
                  </div>
                  <div className="bbody">
                    <h3 className="bcard-title">{post.title}</h3>
                    {post.excerpt ? <p className="desc">{post.excerpt}</p> : null}
                    <div className="bcard-meta">
                      {post.publishedAt ? (
                        <span>{formatDate(post.publishedAt)}</span>
                      ) : null}
                      <span className="read">Read &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
