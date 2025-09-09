
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState<string>('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('API error'))
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>API says: {message}</p>
    </div>
  )
}
