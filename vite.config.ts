// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No se necesita tailwindcss aquí

export default defineConfig({
  plugins: [react()],
})
