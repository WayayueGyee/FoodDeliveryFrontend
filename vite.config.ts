import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: 'src',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       app: 'index.html', // default
  //     },
  //   },
  // },
  // server: {
  //   open: 'index.html',
  // },
})
