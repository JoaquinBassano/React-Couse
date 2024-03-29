import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/getMovies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])

  // Esta ref permite que una misma busqueda no se realize dos veces
  const previousSearch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return

    try {
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (e) {
      console.log(e)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies }
}
