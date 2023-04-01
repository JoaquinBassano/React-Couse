const API_PELIS_URL = 'https://www.omdbapi.com/?apikey=e9bacd17'

export const searchMovies = async ({ query }) => {
  if (query === '') return null

  try {
    const response = await fetch(`${API_PELIS_URL}&s=${query}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error buscando peliculas')
  }
}
