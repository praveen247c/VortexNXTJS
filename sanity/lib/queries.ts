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

// Categories that have at least one post, with a post count.
export const categoriesQuery = groq`
  *[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0]
    | order(title asc){
      _id,
      title,
      "slug": slug.current,
      "count": count(*[_type == "post" && references(^._id)])
    }
`;

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description
  }
`;

export const categorySlugsQuery = groq`
  *[_type == "category" && defined(slug.current)].slug.current
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && defined(slug.current) && category->slug.current == $slug]
    | order(publishedAt desc){
      ${postCardFields}
    }
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
