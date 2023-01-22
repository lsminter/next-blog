import client from '../client'
import Link from 'next/link'
import groq from 'groq'

export default function Home({
  post
}) {

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center flex-wrap">
        {post.map(post => (
          <div key={post.slug}>
            <Link href={{ pathname: `/posts/${post.slug.current}` }} passHref>
              <h2 className="grid border-solid border border-cyan-400 m-4 p-6 text-left no-underline hover:border-cyan-800 hover:text-cyan-800 rounded-xl">
                  {post.title}
                <p>
                  by {post.author.name} on {reformatDate(post.publishedAt)}
                </p>
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const post = await client.fetch(groq`*[_type == "post"] | order(_createdAt desc,) {
    title,
    author->,
    category,
    body,
    publishedAt,
    slug
  }`);
  return {
    props: {
      post: post
    }
  }
}
