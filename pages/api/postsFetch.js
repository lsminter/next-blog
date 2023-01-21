import groq from "groq";
import client from "../../client";

const postsQuery = groq`*[_type == "post"] | order(_createdAt asc,) {
  title,
  author,
  category,
  body,
  publishedAt,
  slug
}`

export async function getPosts(){
  return await client.fetch(postsQuery);
}