import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            home
          </Link>
        </li>
        <li>
          <Link to="super-heroes">
            super heroes
          </Link>
        </li>
        <li>
          <Link to="rq-super-heroes">
            rq super heroes
          </Link>
        </li>
        <li>
          <Link to="rq-parallel">
            ParallelQueries
          </Link>
        </li>
        <li>
          <Link to="rq-dynamic-parallel">
            DYNAMIC Parallel Queries
          </Link>
        </li>
        <li>
          <Link to="rq-dependent">
            Dependent Queries
          </Link>
        </li>
        <li>
          <Link to="rq-paginated">
            paginated Queries
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav