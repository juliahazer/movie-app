import React, { useState, useEffect } from 'react'
import MoviesTable from './MoviesTable'

const PopularMovies = () => {
  const [movies, setMovies] = useState(null)

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api`)
      if (response.status !== 200) {
        window.alert(`There is an error: ${response.status}`)
      }
      const responseJson = await response.json()
      setMovies(responseJson)
    } catch (err) {
      window.alert(err)
    }
  }

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  return (
    <div>
      <div className="text-center">
        <h1>Most Popular Movies</h1>
      </div>

      {(!movies || !movies.length) && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading movies...</span>
          </div>
        </div>
      )}

      {movies && movies.length > 0 && (
        <div className="ml-5 mr-5">
          <MoviesTable movies={movies} />
        </div>
      )}
    </div>
  )
}

export default PopularMovies
