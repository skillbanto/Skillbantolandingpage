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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});