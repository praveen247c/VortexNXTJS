import type { Metadata } from "next";
import Link from "next/link";

import PostFeed, { formatDate, type PostCard } from "@/components/PostFeed";
import { client } from "@/sanity/lib/client";
import { categoriesQuery, postsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog & News · Vortex IQ",
  description: "Product updates, insights and news from Vortex IQ.",
};

export const revalidate = 60;

type Category = { _id: string; title: string; slug: string; count: number };

async function getData(): Promise<{ posts: PostCard[]; categories: Category[] }> {
  try {
    const [posts, categories] = await Promise.all([
      client.fetch<PostCard[]>(postsQuery),
      client.fetch<Category[]>(categoriesQuery),
    ]);
    return { posts, categories };
  } catch {
    return { posts: [], categories: [] };
  }
}

export default async function BlogIndexPage() {
  const { posts, categories } = await getData();
  const featured = posts.slice(0, 3);
  const recent = posts.slice(3);

  return (
    <main>
      {/* Heading + subtitle */}
      <section className="section section--hero">
        <div className="container">
          <div className="eyebrow reveal in">Resources</div>
          <h1 className="reveal in" style={{ marginTop: "1rem" }}>
            Blog &amp; News
          </h1>
          <p className="lede reveal in" style={{ marginTop: "1.4rem" }}>
            Insights on AI, agentic commerce and growth for e-commerce teams.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section">
          <div className="container">
            <p className="lede muted">
              No articles yet. New posts will appear here as soon as they&apos;re
              published.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Read by category */}
          {categories.length > 0 ? (
            <section className="section" style={{ paddingTop: "2rem" }}>
              <div className="container">
                <h2 className="blog-sec-title">Read by category</h2>
                <div className="cat-row">
                  {categories.map((cat, i) => (
                    <Link
                      key={cat._id}
                      className={`cat-card cat-tint-${i % 5}`}
                      href={`/resources/blog/category/${cat.slug}`}
                    >
                      <span className="cat-name">{cat.title}</span>
                      <span className="cat-count">{cat.count} posts</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Featured */}
          {featured.length > 0 ? (
            <section className="section" style={{ paddingTop: "2rem" }}>
              <div className="container">
                <h2 className="blog-sec-title">Featured</h2>
                <ul className="feat-list">
                  {featured.map((post) => (
                    <li key={post._id} className="feat-item">
                      <div className="feat-meta">
                        {post.category?.title ? (
                          <span className="feat-cat">{post.category.title}</span>
                        ) : null}
                        {post.publishedAt ? (
                          <span>{formatDate(post.publishedAt)}</span>
                        ) : null}
                      </div>
                      <Link
                        className="feat-title"
                        href={`/resources/blog/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {/* Recent posts */}
          <section className="section" style={{ paddingTop: "2rem" }}>
            <div className="container">
              <h2 className="blog-sec-title">Recent posts</h2>
              <PostFeed posts={recent.length > 0 ? recent : posts} feature />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
