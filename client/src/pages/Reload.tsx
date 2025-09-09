
export default function Reload() {
  return (
    <div>
      <h1>Reload</h1>

      <div>
        <a href="/reload">GET</a>
      </div>

      <form action="/reload" method="POST">
          <button type="submit">POST</button>
        </form>
    </div>
  )
}
