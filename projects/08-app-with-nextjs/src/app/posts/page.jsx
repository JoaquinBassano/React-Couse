import { Suspense } from 'react'
import ListOfPosts from './ListOfPosts'

export default async function PostsPage () {
  return (
    <>
      <h1>Aqui mostramos los posts...</h1>

      <section>
        <Suspense fallback={<p>CARGANDO posts....</p>}>
          <ListOfPosts />
        </Suspense>
      </section>
    </>
  )
}
