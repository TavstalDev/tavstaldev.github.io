import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: '0.0.0.0',  // Listening network
    port: 8090,       // Listening port
    strictPort: true  // Ensures Vite fails if the port is already in use
  },
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source map generation
  },
})
