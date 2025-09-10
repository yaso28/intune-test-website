
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/fetch/post">Fetch Post</NavLink>
      <NavLink to="/fetch/get">Fetch Get</NavLink>
      <NavLink to="/axios/post">Axios Post</NavLink>
      <NavLink to="/axios/get">Axios Get</NavLink>
      <NavLink to="/reload">Reload</NavLink>
      <NavLink to="/etc">Etc</NavLink>
    </nav>
  )
}
