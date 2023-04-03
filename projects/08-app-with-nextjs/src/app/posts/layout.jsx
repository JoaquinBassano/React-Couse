// Aqui podemos manejar un estado o un buscador por ejemplo,
// para todo lo relacionado en este layout

export default function PostsLayout ({ children }) {
  return (
    <div>
      <small>Este es el layout de los posts</small>
      {children}
    </div>
  )
}
