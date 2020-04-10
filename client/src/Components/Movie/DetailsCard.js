import React from 'react'
import { useHistory } from 'react-router-dom'

const DetailsCard = ({ movie, cast, similarMovies }) => {
  let history = useHistory()

  const displayKeyValue = (key, value) => (
    <div className="d-flex align-items-top">
      <div>{key}:</div>
      {Array.isArray(value)
        ? value.map((val) => valueBadge(val.name))
        : valueBadge(value)}
    </div>
  )

  const displayCast = (cast) => (
    <div className="d-flex flex-column align-items-top">
      <div>Cast Includes:</div>
      <div className="d-flex flex-column">
        {cast.map((castMember) =>
          valueBadge(`${castMember.name} (${castMember.character})`)
        )}
      </div>
    </div>
  )

  const valueBadge = (value) => (
    <div key={value}>
      <span className="badge badge-secondary ml-1 mb-2 mr-2">{value}</span>
    </div>
  )

  const formatDate = (dateStr) => {
    const datePieces = dateStr.split('-')
    if (datePieces.length < 3) {
      return ''
    }
    return datePieces[1] + '/' + datePieces[2] + '/' + datePieces[0]
  }

  const handleSimilarMovieClick = (movieId) => {
    history.push(`/movie/${movieId}`)
  }

  return (
    <div className="card text-center m-2">
      <div className="card-header">
        <h1>{movie.title}</h1>
        {movie.tagline}
      </div>
      <div className="card-body text-left">
        <div className="d-flex flex-row align-items-top">
          <div>
            {movie.posterPath && (
              <img
                className="rounded"
                width="150"
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={`${movie.title} poster`}
              />
            )}
          </div>
          <div className="ml-3">
            <p className="card-text movie-overview">{movie.overview}</p>
            {movie.voteAverage > 0 &&
              displayKeyValue('Vote Average', movie.voteAverage)}
            {movie.voteCount > 0 &&
              displayKeyValue('Vote Count', movie.voteCount.toLocaleString())}
            {movie.releaseDate &&
              displayKeyValue('Release Date', formatDate(movie.releaseDate))}
            {movie.budget > 0 &&
              displayKeyValue('Budget', '$' + movie.budget.toLocaleString())}
            {movie.revenue > 0 &&
              displayKeyValue('Revenue', '$' + movie.revenue.toLocaleString())}
            {movie.genres &&
              movie.genres.length > 0 &&
              displayKeyValue('Genres', movie.genres)}
            {movie.spokenLanguages &&
              movie.spokenLanguages.length > 0 &&
              displayKeyValue('Languages Spoken', movie.spokenLanguages)}
            {cast && cast.length > 0 && displayCast(cast)}
          </div>
        </div>
      </div>
      {similarMovies && similarMovies.length > 0 && (
        <div className="card-header">
          <h4>Similar Movies</h4>
          <div>
            {similarMovies.map((movie) => (
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary mr-2 mb-2"
                onClick={() => handleSimilarMovieClick(movie.id)}>
                {movie.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsCard
