import React from 'react'
import Home from '../share/pages/Home'
import List from '../share/pages/List'
import NotFound from './pages/NotFound'

export default [
  {
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    path: '/list',
    // element: <List />
    ...List,
    element: <List.element />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
