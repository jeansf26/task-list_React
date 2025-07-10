import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/task-list_React/', // nome do seu repositório
  plugins: [react()],
})
