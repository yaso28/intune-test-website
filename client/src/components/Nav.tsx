
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}
