// import Image from 'next/image'

export default function AboutPage () {
  return (
    <>
      <h1>Hola, soy Joaquin</h1>
      {/* <Image
        width='50' height='50'
        src='https://api.dicebear.com/6.x/adventurer/svg?seed=Zoey'
      /> */}
      <img
        width='50'
        height='50'
        src='https://api.dicebear.com/6.x/adventurer/svg?seed=Angel'
        alt='avatar'
      />
    </>
  )
}
