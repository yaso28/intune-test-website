import { FormEvent, useEffect, useState } from 'react'

export default function FetchPost() {
  const [message, setMessage] = useState<string>('Loading...')
    
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('API error'))
  }, [])
  
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [result, setResult] = useState<null | { id: number; message: string }>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || '投稿に失敗しました')
      setResult({ id: data.id, message: data.message })
      setName('')
      setText('')
    } catch (err: any) {
      setError(err.message ?? '未知のエラー')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Fetch Post</h1>
      <p>API says: {message}</p>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
        <label>
          Name
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="お名前（任意）"
            style={{ width: '100%', padding: 8 }}
          />
        </label>
        <label>
          Message <span style={{ color: 'crimson' }}>*</span>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={4}
            placeholder="本文を入力"
            style={{ width: '100%', padding: 8 }}
          />
        </label>
        <button type="submit" style={{ padding: '8px 12px' }}>
          {loading ? '送信中…' : '送信'}
        </button>
      </form>

      {error && <p style={{ color: 'crimson', marginTop: 12 }}>エラー: {error}</p>}
      {result && (
        <p style={{ color: 'green', marginTop: 12 }}>
          #{result.id}: {result.message}
        </p>
      )}
    </div>
  )
}
