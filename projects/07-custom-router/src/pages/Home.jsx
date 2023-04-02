import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Pagina de ejemplo para crear un React Router</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}
