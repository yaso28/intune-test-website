
import { Router } from 'express'
import { dirname, join } from 'path'
import { cwd } from 'process'
import { fileURLToPath } from 'url'

const router = Router()

router.get('/hello', (_req, res) => {
  res.json({ message: 'Hello from Express API!' })
})

router.post('/messages', (req, res) => {
  // JSONなら { text: string, name?: string } を想定
  // URLエンコードの場合も同じキーで取得可能（上の urlencoded ミドルウェアを有効にしていれば）
  const { text, name } = req.body as { text?: string; name?: string }

  if (!text || text.trim().length === 0) {
    res.status(400).json({ error: 'text は必須です' })
    return
  }

  // 本来はDB保存など。ここではエコー返し。
  res.status(201).json({
    id: Date.now(),
    received: { text, name: name ?? 'Anonymous' },
    message: 'メッセージをPOSTで受け取りました'
  })
})

router.get('/messages', (req, res) => {
  const { text, name } = req.query as { text?: string; name?: string }
  if (!text || text.trim().length === 0) {
    res.status(400).json({ error: 'text は必須です' })
    return
  }
  res.status(200).json({
    id: Date.now(),
    received: { text, name: name ?? 'Anonymous' },
    message: 'メッセージをGETで受け取りました'
  })
})

router.post('/reload', (req, res) => {
  const { m, r } = req.body as { m?: string; r?: string }

  res.redirect(`/reload?m=${m}&r=${r}`)
})

router.get('/download', (req, res) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const filePath = join(__dirname, '../../files/sample.txt')
  res.download(filePath, "sample.txt");
});

export default router
