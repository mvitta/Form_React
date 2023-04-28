export function Pagination({ handle, page }) {
  return (
    <section className='section-pagination'>
      <button type='button' id='previous' onClick={handle}>
        Previous
      </button>
      <span>{page}</span>
      <button type='button' id='next' onClick={handle}>
        Next
      </button>
    </section>
  )
}
