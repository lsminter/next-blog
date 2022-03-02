import { getAllPostIds, getPostData } from '../../lib/posts'
import { Container } from '../../components/Styling'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function BlogPost({ postData }) {
  return (
    <Container>
      <div className="text-2xl text-center">{postData.title}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Container>
  )
}