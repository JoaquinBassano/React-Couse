import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: 'joaBass',
    name: 'Joaquin',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel',
    isFollowing: false
  },
  {
    userName: 'nachuGar',
    name: 'Naza',
    isFollowing: true
  }
]

const App = () => {
  return (
    <div className='App'>
      <h1 style={{ color: '#fff' }}>Twitter Card</h1>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              initialIsFollowing={isFollowing}
              userName={userName}
              name={name}
              key={userName}
            />
          )
        })
      }
    </div>
  )
}

export default App
