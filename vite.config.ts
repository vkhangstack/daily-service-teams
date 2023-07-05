import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// import loadVersion from 'vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    // loadVersion(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  server: {
    host: true,
    port: 8000,
    hmr: true,
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 600,
    sourcemap: 'hidden',
    cssCodeSplit: true,
    rollupOptions: {
      cache: false,
    },
  },
});
