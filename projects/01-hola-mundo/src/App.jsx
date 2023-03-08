import './App.css'

const App = () => {
  return (
    <div>
      <h1 style={{ color: '#fff' }}>Twitter Card</h1>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' src='https://ui-avatars.com/api/?name=Joa+Bas' alt='El avatar de Joa' />
          <div className='tw-followCard-info'>
            <strong>Joaquin Bassano</strong>
            <span className='tw-followCard-infoUserName'>@joabas98</span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>Seguir</button>
        </aside>
      </article>
    </div>
  )
}

export default App
