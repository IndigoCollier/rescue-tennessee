import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use '/' for dev, '/Donation-App/' for production (GitHub Pages)
    base: command === 'build' ? '/Donation-App/' : '/',
  }
})
