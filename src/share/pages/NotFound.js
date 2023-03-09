import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound (props) {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/'>To Home page</Link>
    </div>
  )
}
