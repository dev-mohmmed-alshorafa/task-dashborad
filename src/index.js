import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './Redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './i18n'
import Charts from './pages/Charts'
import Manufacturers from './pages/Manufacturers'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Charts /> },
      { path: '/Manufacturers', element: <Manufacturers /> },
    ],
    // errorElement: <NotFound />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
