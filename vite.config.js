import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':'https://server-chat-8skv.onrender.com'
    }
  },
  plugins: [react()],
})
