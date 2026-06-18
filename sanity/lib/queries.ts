import { groq } from "next-sanity";

// Card fields for the blog index grid.
const postCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  "category": category->{title, "slug": slug.current},
  "author": author->{name}
`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postCardFields}
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage,
    body,
    seoTitle,
    seoDescription,
    "category": category->{title, "slug": slug.current},
    "author": author->{name, bio, avatar}
  }
`;
