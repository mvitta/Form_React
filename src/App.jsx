import './App.css'
import { Table } from './components/Table'
import '../src/App.css'
import { useState } from 'react'
import { Loading } from './components/Loading.jsx'
import { useMovie } from './hooks/useMovie'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'

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
    // si esta vacio es falso
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    // no hay time para un manejador de error jeje
    if (title) {
      setMovietitle(title)
      console.log(title)
    } else {
      alert('debes llenar el campo')
    }
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
          <Form handle={handleSubmit} />
        </div>
        {/* Carga de tabla con nombre de peliculas */}
        {loading ? <Table movies={movies.Search} /> : <Loading />}
        {/* Paginacion */}
        <Pagination handle={handlePagination} page={page} />
        <Footer />
      </div>
    </>
  )
}

export default App
