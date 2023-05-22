import './App.css'
import '../src/App.css'
import { Form } from './components/Form'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <header>
        <div>OMDb API</div>
      </header>
      <div className='App'>
        <h1>Movies</h1>
        <main className='section-search'>
          <Form />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
