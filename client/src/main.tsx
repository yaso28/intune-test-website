
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles.css'
import FetchPost from './pages/FetchPost'
import FetchGet from './pages/FetchGet'
import AxiosPost from './pages/AxiosPost'
import AxiosGet from './pages/AxiosGet'
import Reload from './pages/Reload'

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
