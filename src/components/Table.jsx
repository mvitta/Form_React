export function Table({ movies }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>imdbID</td>
            <td>Title</td>
            <td>Year</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            const { imdbID, Title, Year, Type } = movie
            return (
              <tr key={crypto.randomUUID()}>
                <td>{imdbID}</td>
                <td>{Title}</td>
                <td>{Year}</td>
                <td>{Type}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
