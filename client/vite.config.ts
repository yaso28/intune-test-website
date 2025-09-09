
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 開発時は /api を Express(3000) にプロキシ
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: 'dist'
  }
})
