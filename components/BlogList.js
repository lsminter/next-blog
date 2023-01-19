import Link from 'next/link'
import styles from '../styles/Home.module.css'

const BlogList = ({ allBlogs }) => {

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <div className={styles.grid}>
        {allBlogs.data.map(post => (
          <div key={post.attributes.slug}>
            <Link href={{ pathname: `/posts/${post.attributes.slug}` }} passHref>
              <h2 className={styles.card}>
                  {post.attributes.title}
                <p>
                  by {post.attributes.author} on {reformatDate(post.attributes.date)}
                </p>
              </h2>
            </Link> 
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogList