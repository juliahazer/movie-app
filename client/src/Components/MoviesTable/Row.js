import React from 'react'
import { useHistory } from 'react-router-dom'

const Row = ({ movie }) => {
  let history = useHistory()

  const handleRowClick = (movieId) => {
    history.push(`/movie/${movieId}`)
  }

  return (
    <tr key={movie.id} onClick={() => handleRowClick(movie.id)}>
      <td className="align-top">
        <div>
          <span className="badge badge-pill badge-dark">{movie.number}</span>
        </div>
      </td>
      <td className="align-top">
        {movie.posterPath && (
          <img
            className="rounded"
            width="150"
            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
            alt={`${movie.title} poster`}
          />
        )}
      </td>
      <td className="align-top">
        <h5>{movie.title}</h5>
        <div>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </td>
      <td className="align-top">
        <div className="d-flex align-items-center justify-content-between">
          <div>Average</div>
          <div className="pl-4">
            <span className="badge badge-secondary">{movie.voteAverage}</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Count</div>
          <div className="pl-4">
            <span className="badge badge-secondary">
              {movie.voteCount.toLocaleString()}
            </span>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default Row
