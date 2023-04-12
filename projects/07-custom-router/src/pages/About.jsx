import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://pbs.twimg.com/profile_images/729039884397195265/i9xkQiLx_400x400.jpg' alt='Foto de Joaquin' />
      <p>Hola, me llamo Joaquin</p>
      <Link to='/'>Ir a la Home</Link>
    </>
  )
}
