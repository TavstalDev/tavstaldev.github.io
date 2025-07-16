import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    /*https: {
      key: fs.readFileSync('./certs/dev.pem'),
      cert: fs.readFileSync('./certs/dev.crt'),
    },*/
    host: 'localhost',  // Listening network
    port: 8090,       // Listening port
    strictPort: true  // Ensures Vite fails if the port is already in use
  },
  plugins: [tailwindcss(), react()],
  build: {
    sourcemap: false, // Disable source map generation
  },
})
