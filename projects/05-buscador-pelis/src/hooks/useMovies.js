import { useRef, useState } from 'react'
import { searchMovies } from '../services/getMovies'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])

  // Esta ref permite que una misma busqueda no se realize dos veces
  const previousSearch = useRef(query)

  const getMovies = async () => {
    if (query === previousSearch.current) return

    try {
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (e) {
      console.log(e)
    }
  }

  return { movies, getMovies }
}
