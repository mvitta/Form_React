import './App.css'
import { Table } from './components/Table'
import '../src/App.css'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [movieTitle, setMovietitle] = useState('Avengers')

  const BASE_URL = 'http://www.omdbapi.com/'

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${movieTitle}&page=${page}&type=movie`
        )
        const data = await response.json()
        setMovies(data)
        setLoading(true)

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [page, movieTitle])

  function handleFilter() {
    const valueInput = document.getElementById('filter').value
    const { Search } = movies
    const filter = Search.filter((movie) => valueInput === movie.Title)

    console.log(filter)
    setMovies({ Search: filter })
  }

  function handlePagination(e) {
    const id = e.target.id
    if (id === 'next') {
      if (page >= 1 && page < Math.ceil(movies.totalResults / 10)) {
        setPage(page + 1)
      }
    }
    if (id === 'previous') {
      if (page > 1 && page <= Math.ceil(movies.totalResults / 10)) {
        setPage(page - 1)
      }
    }
  }

  function handleSubmit(e) {
    const title = document.getElementById('search').value
    setMovietitle(title)
    console.log(title)
    e.preventDefault()
  }

  return (
    <>
      <div className='App'>
        <h1>Movies</h1>
        <section>
          <p>Total Results: {movies.totalResults}</p>
        </section>
        <div className='section-search'>
          {/* formulario */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='filter'>
                Filter
                <input type='text' name='filter' id='filter' />
              </label>
              <button onClick={handleFilter}>Filter Current table</button>
            </div>
            <div>
              <label htmlFor='search'>
                New Search
                <input type='text' name='search' id='search' />
              </label>
              <button type='submit'>Search</button>
            </div>
          </form>
        </div>
        {/* Carga de tabla con nombre de peliculas */}
        {loading ? <Table movies={movies.Search} /> : <div>Error </div>}
        {/* Paginacion */}
        <section className='section-pagination'>
          <button type='button' id='previous' onClick={handlePagination}>
            Previous
          </button>
          <span>{page}</span>
          <button type='button' id='next' onClick={handlePagination}>
            Next
          </button>
        </section>
      </div>
    </>
  )
}

export default App
