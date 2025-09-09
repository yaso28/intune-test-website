
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles.css'

const Home = lazy(() => import('./pages/Home'))
const FetchPost = lazy(() => import('./pages/FetchPost'))
const FetchGet = lazy(() => import('./pages/FetchGet'))
const AxiosPost = lazy(() => import('./pages/AxiosPost'))
const AxiosGet = lazy(() => import('./pages/AxiosGet'))
const Reload = lazy(() => import('./pages/Reload'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'fetch/post', element: <FetchPost /> },
      { path: 'fetch/get', element: <FetchGet /> },
      { path: 'axios/post', element: <AxiosPost /> },
      { path: 'axios/get', element: <AxiosGet /> },
      { path: 'reload', element: <Reload /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
