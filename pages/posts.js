import client from '../client'
import Link from 'next/link'
import postsFetch from './api/postsFetch'

export default function Posts({
  post
}) {

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <h1 className="text-xl text-center">
        All Posts
      </h1>
      <div className="flex h-screen justify-center">
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
  const post = await client.fetch(postsFetch);
  return {
    props: {
      post: post
    }
  }
}
