import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Using the proxy instance
      '/passes': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      },
      '/pass_requests': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      },
      '/signup': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      },
      '/logout': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      },
      '/login': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      }
    },
  },
})
