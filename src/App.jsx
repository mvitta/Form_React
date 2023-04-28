import './App.css'
import { Table } from './components/Table'
import '../src/App.css'
import { useState } from 'react'
import { Loading } from './components/Loading.jsx'
import { useMovie } from './hooks/useMovie'

function App() {
  const [page, setPage] = useState(1)
  const [movieTitle, setMovietitle] = useState('Avengers')

  const { movies, loading } = useMovie({ page, movieTitle })

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
              <label htmlFor='search'>
                Search Movies
                <input type='text' name='search' id='search' placeholder='write a movie' />
              </label>
              <button type='submit'>Search</button>
            </div>
          </form>
        </div>
        {/* Carga de tabla con nombre de peliculas */}
        {loading ? <Table movies={movies.Search} /> : <Loading />}
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

        <footer>
          <div>
            <span>API: </span>
            <a href='https://www.omdbapi.com/' target='_blank' rel='noopener noreferrer'>
              https://www.omdbapi.com/
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
