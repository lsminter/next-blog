import fetch from 'cross-fetch'
import { server } from '../../config'
import Link from 'next/link'

import {marked} from 'marked'

import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

export default function Blog({ posts }) {
  const html = marked(posts.attributes.body)
  return (
    <div className='prose mx-auto max-w-4x1'>
      <h1 className='text-center text-3xl'>
        {posts.attributes.title}
      </h1>
      <h4 className='my-4 text-center'>by {posts.attributes.author}</h4>
      <p className='my-4 text-center'>
        <Link href='/posts'>
          &larr; go back to all posts
        </Link>
      </p>
      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )

}

export const getStaticProps = async ({ ...ctx }) => {
  let pageData = []

  const client = new ApolloClient({
    link: new HttpLink({ uri: `${server}/graphql`, fetch }),
    cache: new InMemoryCache
  });

  const { data } = await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              author
              date
              slug
              body
              title
            }
          }
        }
      }
    `
  })

  for (let index = 0; index < data.posts.data.length; index++) {
    if (data.posts.data[index].attributes.slug === ctx.params.slug) {
      pageData = data.posts.data[index]
    }
  }

  return { 
    props: {
      posts: pageData
    },
  }
}

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: `${server}/graphql`, fetch }),
    cache: new InMemoryCache
  });

  const { data } = await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              author
              slug
            }
          }
        }
      }
    `
  })

  const paths = data.posts.data.map(post => ({
    params: {
      slug: post.attributes.slug,
      posts: post.attributes
    }
  }))

  return { 
    paths, 
    fallback: false
  }
}