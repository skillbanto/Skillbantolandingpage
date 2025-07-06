import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'client',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
