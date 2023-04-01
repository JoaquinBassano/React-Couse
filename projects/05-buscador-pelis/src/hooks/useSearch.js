import { useRef, useState, useEffect } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = query === ''
      return
    }

    if (query === '') {
      setError('No se puede buscar la cadena vacia')
      return
    }

    setError('')
  }, [query])

  return { query, setQuery, error }
}
