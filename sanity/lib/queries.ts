import { groq } from "next-sanity";

// Get all posts ordered by publication date
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  "author": author->{
    name,
    image
  }
}`;

// Get a single post by slug
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  body,
  "categories": categories[]->title,
  "author": author->{
    name,
    image,
    bio
  }
}`;

// Get all post slugs for generateStaticParams
export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`;
