import React from 'react'
import { Link } from 'react-router-dom'
export default function Home () {
  return (
    <>
      <div onClick={() => console.log('Hello onClick trigger')}>
        Home works run with nodemon cli{' '}
      </div>
      <Link to='/list'>navigate to list page</Link>
    </>
  )
}
