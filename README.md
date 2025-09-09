# React + Express.js (TypeScript) Monorepo

- フロントエンド: React (Vite, TypeScript, React Router)
- バックエンド: Express.js (TypeScript)
- 本番運用時は Express が `client/dist` を静的ホストし、API も同一オリジンで提供します。

## 使い方

```bash
# 1) ルートで依存関係をインストール
npm install --workspaces

# 2) 開発モード (フロント: Vite 5173, バック: Express 3000)
npm run dev

# 3) 本番ビルド
npm run build

# 4) サーバ起動 (client を静的配信 + API)
npm start
```

### API
- `GET /api/hello` -> `{ message: "Hello from Express API!" }`

### ルーティング
- React Router によるページ遷移 (`/`, `/about` など) に対応。
- 本番時は Express が SPA fallback で `index.html` を返し、クライアント側ルーティングが機能します。

