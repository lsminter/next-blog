import fetch from 'cross-fetch'
import { server } from '../config'

import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

import BlogList from '../components/bloglist';


export default function Home({
  posts
}) {
  return (
    <div className='h-screen'>
      <h2 className='pl-5 text-2xl'>Posts</h2>
      <BlogList allBlogs={posts.posts}/>
    </div>
  );
}

export const getStaticProps = async () => {
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

  return { 
    props: {
      posts: data
    },
  }
}