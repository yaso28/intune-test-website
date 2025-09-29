import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import compression from 'compression'
import cors from 'cors'
import apiRouter from './routes/api.js'
import pageRouter from './routes/page.js'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API
app.use('/api', apiRouter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use('/page', pageRouter);

// ---- Static hosting for the built React app ----
// In production, `client/dist` should exist. We compute it relative to the compiled server location.
const clientDist = path.resolve(__dirname, '../../client/dist')

app.use(express.static(clientDist))

// SPA fallback: send index.html for non-API GET routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    res.status(404).json({ error: 'Not found' })
    return
  }
  res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
