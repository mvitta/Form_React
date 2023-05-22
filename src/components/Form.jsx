import { useState } from 'react'
import { useMovie } from '../hooks/useMovie'
import { Table } from './Table'
import { Loading } from '../components/Loading.jsx'
import { Pagination } from '../components/Pagination'

export function Form() {
  const [page, setPage] = useState(1)
  const [movieTitle, setMovietitle] = useState('Avengers')
  const { movies, loading } = useMovie({ page, movieTitle })

  function handleSubmit(e) {
    const title = document.getElementById('search').value
    // si esta vacio es falso
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    // no hay time para un manejador de error jeje
    if (title) {
      setMovietitle(title)
    } else {
      alert('debes llenar el campo')
    }
    e.preventDefault()
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

  return (
    <form onSubmit={handleSubmit}>
      <div className='section-search'>
        <label htmlFor='search'>
          Search Movies
          <input
            type='text'
            name='search'
            id='search'
            placeholder='write a movie'
          />
        </label>
        <button type='submit'>Search</button>
      </div>
      {/* Carga de tabla con nombre de peliculas */}
      {loading ? <Table movies={movies} /> : <Loading />}
      {/* Paginacion */}
      <Pagination handle={handlePagination} page={page} />
    </form>
  )
}
