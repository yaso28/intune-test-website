
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
