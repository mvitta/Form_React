export async function getMoviesService({ url, inputValue }) {
  try {
    const response = await fetch(`${url}?apikey=${import.meta.env.VITE_API_KEY}&s=${inputValue}&page=${2}&type=movie`, {
      method: 'POST',
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(new Error(error))
  }
}
