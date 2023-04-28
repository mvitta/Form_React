export function Table({ movies }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>imdbID</td>
            <td>Title</td>
            <td>Year</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            const { imdbID, Title, Year, Type } = movie
            return (
              <tr key={crypto.randomUUID()}>
                <td>{index + 1}</td>
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
