module.exports = function (movie, index, full = false) {
  let formattedMovie = {
    number: index + 1,
    id: movie.id,
    title: movie.title,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    overview: movie.overview,
    posterPath: movie.poster_path,
  }

  if (full) {
    formattedMovie = {
      ...formattedMovie,
      releaseDate: movie.release_date,
      genres: movie.genres,
      tagline: movie.tagline,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      spokenLanguages: movie.spoken_languages,
    }
  }

  return formattedMovie
}
