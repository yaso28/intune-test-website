
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import { Suspense } from 'react'

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
