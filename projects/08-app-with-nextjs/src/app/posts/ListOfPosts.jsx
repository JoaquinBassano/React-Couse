import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: 'red' }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
}
