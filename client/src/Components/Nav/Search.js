import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [query, setQuery] = useState('')
  let history = useHistory()

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchKeyUp = (e) => {
    if (e.keyCode === 13 && query !== '') {
      e.preventDefault()
      setQuery('')
      history.push({
        pathname: '/search/movie',
        search: `query=${e.target.value}`,
      })
    }
  }

  return (
    <form className="ml-3 mr-2 my-auto w-100 d-inline-block order-1">
      <div className="input-group">
        <input
          type="text"
          className="form-control border border-right-0"
          placeholder="Search..."
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyUp}
          value={query}
        />
      </div>
    </form>
  )
}

export default Search
