import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailsCard from './DetailsCard'

const Movie = ({ match }) => {
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState(null)
  const [similarMovies, setSimilarMovies] = useState(null)
  const { id: movieId } = useParams()

  const fetchMovie = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/movie/${id}`
      )
      if (response.status !== 200) {
        window.alert(`There is an error: ${response.status}`)
      }
      const responseJson = await response.json()
      setMovie(responseJson)
    } catch (err) {
      window.alert(err)
    }
  }

  const fetchCast = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/movie/${id}/cast`
      )
      if (response.status !== 200) {
        window.alert(`There is an error: ${response.status}`)
      }
      const responseJson = await response.json()
      setCast(responseJson)
    } catch (err) {
      window.alert(err)
    }
  }

  const fetchSimilar = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/movie/${id}/similar`
      )
      if (response.status !== 200) {
        window.alert(`There is an error: ${response.status}`)
      }
      const responseJson = await response.json()
      setSimilarMovies(responseJson)
    } catch (err) {
      window.alert(err)
    }
  }

  useEffect(() => {
    fetchMovie(movieId)
    fetchCast(movieId)
    fetchSimilar(movieId)
  }, [movieId])

  if (!movie || !cast) {
    return (
      <div className="text-center mt-3">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading movie...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="movie-details">
        <div className="container-fluid">
          <div className="text-center">
            {movie && (
              <DetailsCard
                movie={movie}
                cast={cast}
                similarMovies={similarMovies}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
