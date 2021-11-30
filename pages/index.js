import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import Post from '../components/Post';

export default function Home({posts}) {
  return (
    <div>
      <main className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
       <div>
          {posts.map((post) => {
            return <Post post={post}/>
            
          })}
       </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return (
      slug,
      frontmatter
    )

  })

  return {
    props: {
      posts,
    }
  }
}