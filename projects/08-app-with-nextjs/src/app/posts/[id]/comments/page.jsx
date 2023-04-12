const fetchSinglePostComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  //   throw new Error('No se pudieron recuperar los comments')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchSinglePostComments(id)

  return (
    <ul>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))
      }
    </ul>
  )
}
