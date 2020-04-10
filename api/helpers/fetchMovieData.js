const axios = require('axios')
require('dotenv').config()
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3'

module.exports = {
  popularMovies: async (limit) => {
    try {
      const response = await axios.get(`${MOVIE_DB_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.MOVIE_DB_API_KEY,
        },
      })
      const results = response.data.results
      const topResults = results.slice(0, limit)
      return topResults
    } catch (error) {
      console.log(error)
    }
  },
  movie: async (id) => {
    try {
      const response = await axios.get(`${MOVIE_DB_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.MOVIE_DB_API_KEY,
        },
      })
      const result = response.data
      return result
    } catch (error) {
      console.log(error)
    }
  },
  movieCast: async (id, limit) => {
    try {
      const response = await axios.get(
        `${MOVIE_DB_BASE_URL}/movie/${id}/credits`,
        {
          params: {
            api_key: process.env.MOVIE_DB_API_KEY,
          },
        }
      )
      const results = response.data.cast
      const limitResults = results.slice(0, limit)
      return limitResults
    } catch (error) {
      console.log(error)
    }
  },
  similarMovies: async (id, limit) => {
    try {
      const response = await axios.get(
        `${MOVIE_DB_BASE_URL}/movie/${id}/similar`,
        {
          params: {
            api_key: process.env.MOVIE_DB_API_KEY,
          },
        }
      )
      const results = response.data.results
      const limitResults = results.slice(0, limit)
      return limitResults
    } catch (error) {
      console.log(error)
    }
  },
  searchMovies: async (query, limit) => {
    try {
      const response = await axios.get(`${MOVIE_DB_BASE_URL}/search/movie`, {
        params: {
          api_key: process.env.MOVIE_DB_API_KEY,
          query: query,
        },
      })
      const results = response.data.results
      const limitResults = results.slice(0, limit)
      return limitResults
    } catch (error) {
      console.log(error)
    }
  },
}
