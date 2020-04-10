const express = require('express')
const router = express.Router()
const fetchMovieData = require('../helpers/fetchMovieData.js')
const formatMovieData = require('../helpers/formatMovieData.js')
const formatCastData = require('../helpers/formatCastData.js')

const POPULAR_MOVIES_LIMIT = 10
const SEARCH_MOVIES_LIMIT = 10
const SIMILAR_MOVIES_LIMIT = 4
const CAST_LIMIT = 5

router.get('/', async function (req, res) {
  const results = await fetchMovieData.popularMovies(POPULAR_MOVIES_LIMIT)
  const moviesData = results.map((movie, i) => formatMovieData(movie, i))
  res.send(moviesData)
})

router.get('/movie/:id', async function (req, res) {
  const movieId = req.params.id
  const result = await fetchMovieData.movie(movieId)
  const movieData = formatMovieData(result, 0, true)
  res.send(movieData)
})

router.get('/movie/:id/similar', async function (req, res) {
  const movieId = req.params.id
  const results = await fetchMovieData.similarMovies(
    movieId,
    SIMILAR_MOVIES_LIMIT
  )
  const moviesData = results.map((movie, i) => formatMovieData(movie, i))
  res.send(moviesData)
})

router.get('/movie/:id/cast', async function (req, res) {
  const movieId = req.params.id
  const results = await fetchMovieData.movieCast(movieId, CAST_LIMIT)
  const castData = results.map((cast) => formatCastData(cast))
  res.send(castData)
})

router.get('/search/movies', async function (req, res) {
  const query = req.query.query
  const results = await fetchMovieData.searchMovies(query, SEARCH_MOVIES_LIMIT)
  const moviesData = results.map((movie, i) => formatMovieData(movie, i))
  res.send(moviesData)
})

module.exports = router
