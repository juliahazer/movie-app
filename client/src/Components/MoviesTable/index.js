import React, { useState } from 'react'
import Row from './Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const MoviesTable = ({ movies }) => {
  const [sortedColumn, setSortedColumn] = useState('number')
  const [sortOrderAsc, setSortOrderAsc] = useState(true)

  const handleSortClick = (columnName) => {
    const newSortOrder = sortedColumn === columnName ? !sortOrderAsc : true
    setSortOrderAsc(newSortOrder)
    setSortedColumn(columnName)
    if (columnName === 'title') {
      //sort alphabetically
      movies.sort((a, b) => {
        if (a[columnName].toLowerCase() < b[columnName].toLowerCase()) {
          return newSortOrder ? -1 : 1
        }
        if (b[columnName].toLowerCase() < a[columnName].toLowerCase()) {
          return newSortOrder ? 1 : -1
        }
        return 0
      })
    } else {
      //sort by number
      movies.sort((a, b) =>
        newSortOrder
          ? a[columnName] - b[columnName]
          : b[columnName] - a[columnName]
      )
    }
  }

  const tableHeaderCell = (text, key) => (
    <th
      scope="col"
      className="table-header"
      onClick={() => handleSortClick(key)}>
      <div className="d-flex">
        <div>{text}</div>
        <div className="ml-1">
          {sortedColumn === key && (
            <FontAwesomeIcon icon={sortOrderAsc ? faSortDown : faSortUp} />
          )}
        </div>
      </div>
    </th>
  )

  return (
    <div className="d-flex justify-content-center">
      <div className="table-responsive movies-table">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              {tableHeaderCell('Number', 'number')}
              <th scope="col"></th>
              {tableHeaderCell('Movie', 'title')}
              {tableHeaderCell('Votes', 'voteAverage')}
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((movie) => <Row key={movie.id} movie={movie} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MoviesTable
