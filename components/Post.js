import Link from 'next/link'

export default function Post({post}) {
  return (
    <div>
      <div key={post.title}>{post.title}</div>
      {console.log(post)}
      <Link href={`/blog/${post.slug}`}>
        <a>Read More</a>
      </Link>
    </div>
  )
}