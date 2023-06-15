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
      </ul>
    </nav>
  )
}

export default Nav