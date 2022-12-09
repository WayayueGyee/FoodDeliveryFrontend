import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
