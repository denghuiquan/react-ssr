import React from 'react'
// import ReactDOM from 'react-dom'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { useRoutes } from 'react-router'
// import routes from '../share/routes'
import App from '../share/pages/App'
import { store } from '../store/Store.client'
import { Provider } from 'react-redux'

const container = document.querySelector('#root')
// ReactDOM.hydrate(<Home />, container)

const root = hydrateRoot(
  container,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
