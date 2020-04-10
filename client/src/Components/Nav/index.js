import React from 'react'
import Search from './Search'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="d-flex flex-grow-1">
        <a href="/" className="navbar-brand">
          Movie App
        </a>
        <Search />
      </div>
    </nav>
  )
}

export default Nav
