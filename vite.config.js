import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  publicDir: resolve(__dirname, 'public'),
  server: {
    middlewareMode: false,
  },
  build: {
    assetsDir: 'assets',
    copyPublicDir: true,
  },
})
