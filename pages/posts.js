import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { Container, Main, List, ListItem } from '../components/Styling';


export default function Home({
  posts,
}) {
  return (
    <Container>
      <Main>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <a className="hover:text-gray-600 text-2xl" href={`posts/${post.slug}`}>{post.title}</a>
              <p>{post.description}</p>
            </ListItem>
          ))}
        </List>
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