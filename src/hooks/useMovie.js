import { useState, useEffect } from 'react'

export function useMovie({ page, movieTitle }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const BASE_URL = 'http://www.omdbapi.com/'

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${
            import.meta.env.VITE_API_KEY
          }&s=${movieTitle}&page=${page}&type=movie`
        )
        const data = await response.json()
        setMovies(data)
        setLoading(true)
      } catch (error) {
        console.log(new Error(error))
      }
    }

    fetchMovies()
  }, [page, movieTitle])

  return { movies, loading }
}
