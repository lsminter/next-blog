import { getSortedPostsData } from '../lib/posts'
import Head from "next/head";
import Link from 'next/link'
import { Container, Main, BlogTitle } from '../components/Styling';


const title = "My awesome blog";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>My awesome blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BlogTitle className="title">{title}</BlogTitle>
        <Link href="/posts">Checkout my posts</Link>
      </Main>
    </Container>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const posts = await allPostsData;

  return {
    props: {
      posts,
    },
  };
}