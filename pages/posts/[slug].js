import client from '../../client'
import Link from 'next/link'

import {marked} from 'marked'

export default function Blog({ post }) {
  const html = marked(post.body)
  return (
    <div className='prose mx-auto max-w-4x1'>
      <h1 className='text-center text-3xl'>
        {post.title}
      </h1>
      <h4 className='my-4 text-center'>by {post.author.name}</h4>
      <p className='my-4 text-center'>
        <Link href='/posts'>
          &larr; go back to all posts
        </Link>
      </p>
      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )

}

export async function getStaticProps({params}) {
  const {slug} = params
  const post = `*[_type == "post" && slug.current == "${slug}"] [0]{
    title,
    author->,
    body,
    publishedAt,
    slug
  }`;
  const data = await client.fetch(post)
  return {
    props: {
      post: data
    }
  }
}


export async function getStaticPaths() {
  const paths = `
    *[_type == "post" && defined(slug.current)][].slug.current
  `
  const data = await client.fetch(paths)
  return {
    paths: data.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}