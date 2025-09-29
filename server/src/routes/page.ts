import { Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const router = Router()

router.get("/", (req, res) => {
  res.render("default.ejs", {
    title: "Index"
  })
})

router.get('/download', (req, res) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const filePath = join(__dirname, '../../files/sample.txt')
  res.download(filePath, "sample.txt");
});

router.get("/redirect", (req, res) => {
  res.redirect("/page")
})

router.get("/error", (req, res) => {
  res.status(500).render("default.ejs", {
    title: "ERROR"
  })  
})


// GET: フォーム表示
router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'お問い合わせ',
        errors: [],
        success: false,
        formData: {}
    });
});

// POST: フォーム送信処理
router.post('/contact', [
    body('name').notEmpty().withMessage('お名前は必須です'),
    body('email').isEmail().withMessage('有効なメールアドレスを入力してください')
], (req: Request, res: Response) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).render('contact', {
            title: 'お問い合わせ',
            errors: errors.array(),
            success: false,
            formData: req.body
        });
    }

    if (req.body.name === "ERROR") {
      return res.status(500).render('contact', {
            title: 'お問い合わせ',
            errors: [
              {
                msg: "予期せぬエラー"
              }
            ],
            success: false,
            formData: req.body
      })
    }
    
    // 送信処理（データベース保存、メール送信など）
    
    res.render('contact', {
        title: 'お問い合わせ',
        errors: [],
        success: true,
        formData: req.body
    });
});

router.all("*", (req, res) => {
  res.status(404).render("default.ejs", {
    title: "Not Found"
  })
})

export default router
