import { useEffect, useState } from "react"

export default function Reload() {
  const [params, setParams] = useState({ m: '', r: '' })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setParams({
      m: urlParams.get('m') || '',
      r: urlParams.get('r') || ''
    })
  }, [])

  const [random] = useState(crypto.randomUUID())

  return (
    <div>
      <h1>Reload</h1>

      <div>
        <h2>パラメータ</h2>
        <p>m = {params.m}</p>
        <p>r = {params.r}</p>
      </div>

      <div>
        <a href={`/reload?m=get&r=${random}`}>GET</a>
      </div>

      <form action="/api/reload" method="POST">
          <input type="hidden" name="m" value="post" />
          <input type="hidden" name="r" value={random} />
          <button type="submit">POST</button>
        </form>
    </div>
  )
}
