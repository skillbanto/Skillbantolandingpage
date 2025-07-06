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
    // Split into smaller chunks to avoid timeout
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            if (id.includes('react-router')) {
              return 'routing';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-lib';
            }
            if (id.includes('@tanstack')) {
              return 'query';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-d';
            }
            return 'vendor';
          }
        },
        // Increase chunk size limit for deployment
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize build performance
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    reportCompressedSize: false, // Faster builds
  },
  // Pre-optimize heavy dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@tanstack/react-query'
    ],
  },
  server: {
    fs: {
      strict: false
    }
  }
});