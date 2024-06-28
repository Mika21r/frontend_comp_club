import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mika21r/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/index-t265GIMJ.js',
        entryFileNames: 'assets/index-t265GIMJ.js',
        assetFileNames: 'assets/index--zP0Rm_t.css'
      }
    }
  }
})
