import React from 'react'
import dotenv from 'dotenv'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import PopularMovies from './Components/PopularMovies'
import Movie from './Components/Movie'
import SearchResults from './Components/SearchResults'

dotenv.config()

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact>
            <PopularMovies />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/search/movie">
            <SearchResults />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
