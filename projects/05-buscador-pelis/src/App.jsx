import { useCallback, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(debounce(query => {
    getMovies({ query })
  }, 500), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    debouncedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' placeholder='Fast & Furios, Avengers, ...' />
          <button type='submit'>Buscar</button>
          <input type='checkbox' checked={sort} onChange={handleSort} />
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
