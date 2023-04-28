export function Form({ handle }) {
  return (
    <form onSubmit={handle}>
      <div>
        <label htmlFor='search'>
          Search Movies
          <input type='text' name='search' id='search' placeholder='write a movie' />
        </label>
        <button type='submit'>Search</button>
      </div>
    </form>
  )
}
