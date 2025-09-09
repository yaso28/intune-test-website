
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function NotFound() {
  const err = useRouteError()
  const msg = isRouteErrorResponse(err) ? `${err.status} ${err.statusText}` : 'ページが見つかりません'
  return (
    <div className="container">
      <h1>Oops</h1>
      <p>{msg}</p>
      <Link to="/">Homeへ戻る</Link>
    </div>
  )
}
