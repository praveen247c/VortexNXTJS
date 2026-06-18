import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: { asset?: { _ref: string }; alt?: string };
  category?: { title?: string; slug?: string } | null;
  author?: { name?: string } | null;
};

export function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function Meta({ post }: { post: PostCard }) {
  return (
    <div className="pcard-meta">
      {post.category?.title ? (
        <Link
          className="pcard-cat"
          href={`/resources/blog/category/${post.category.slug}`}
        >
          {post.category.title}
        </Link>
      ) : (
        <span />
      )}
      <span className="pcard-rule" />
      {post.publishedAt ? (
        <span className="pcard-date">{formatDate(post.publishedAt)}</span>
      ) : null}
    </div>
  );
}

/** Standard grid card. */
function Card({ post }: { post: PostCard }) {
  return (
    <article className="pcard">
      <Link className="pcard-cover" href={`/resources/blog/${post.slug}`}>
        {post.coverImage?.asset ? (
          <Image
            src={urlForImage(post.coverImage).width(760).height(460).url()}
            alt={post.coverImage.alt || post.title}
            width={760}
            height={460}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="pcard-noimg" />
        )}
      </Link>
      <Meta post={post} />
      <h3 className="pcard-title">
        <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      {post.excerpt ? <p className="pcard-excerpt">{post.excerpt}</p> : null}
    </article>
  );
}

/** Full-width feature: large image left, meta + title + excerpt right. */
function WideCard({ post }: { post: PostCard }) {
  return (
    <article className="pcard-wide">
      <Link className="pcard-wide-cover" href={`/resources/blog/${post.slug}`}>
        {post.coverImage?.asset ? (
          <Image
            src={urlForImage(post.coverImage).width(1200).height(720).url()}
            alt={post.coverImage.alt || post.title}
            width={1200}
            height={720}
            sizes="(max-width: 768px) 100vw, 560px"
          />
        ) : (
          <div className="pcard-noimg" />
        )}
      </Link>
      <div className="pcard-wide-body">
        <Meta post={post} />
        <h3 className="pcard-wide-title">
          <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt ? (
          <p className="pcard-wide-excerpt">{post.excerpt}</p>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Card grid. When `feature` is set, a full-width wide post leads the feed and
 * recurs every `blockSize` posts (1 wide + a couple of full grid rows).
 */
export default function PostFeed({
  posts,
  feature = false,
  blockSize = 7,
}: {
  posts: PostCard[];
  feature?: boolean;
  blockSize?: number;
}) {
  if (!feature) {
    return (
      <div className="post-grid">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    );
  }

  const items: ReactNode[] = [];
  posts.forEach((post, i) => {
    items.push(
      i % blockSize === 0 ? (
        <WideCard key={post._id} post={post} />
      ) : (
        <Card key={post._id} post={post} />
      )
    );
  });

  return <div className="post-grid">{items}</div>;
}
