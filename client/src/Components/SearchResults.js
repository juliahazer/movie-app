import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import MoviesTable from './MoviesTable'

const SearchResults = () => {
  const [movies, setMovies] = useState(null)
  const [query, setQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    const values = queryString.parse(location.search)
    setQuery(values.query)
    fetchSearchMovies(values.query)
  }, [location.search])

  const fetchSearchMovies = async (query) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/search/movies?query=${query}`
      )
      if (response.status !== 200) {
        window.alert(`There is an error: ${response.status}`)
      }
      const responseJson = await response.json()
      setMovies(responseJson)
    } catch (err) {
      window.alert(err)
    }
  }
  return (
    <div>
      <div className="text-center">
        <h1>Search Results for '{query}'</h1>
      </div>

      {!movies && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading movies...</span>
          </div>
        </div>
      )}

      {movies && !movies.length && (
        <div className="d-flex justify-content-center">
          <div className="ml-5 mr-5 search-alert">
            <div className="alert alert-danger" role="alert">
              No results found.
            </div>
          </div>
        </div>
      )}

      {movies && movies.length > 0 && (
        <div className="d-flex justify-content-center">
          <div className="ml-5 mr-5 search-alert">
            <div className="alert alert-success" role="alert">
              {movies.length === 10
                ? 'The first 10 results are...'
                : `${movies.length} results found...`}
            </div>
            <MoviesTable movies={movies} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResults
