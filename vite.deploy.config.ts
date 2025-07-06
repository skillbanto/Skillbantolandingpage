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
    // Optimize for faster, more reliable builds
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
        },
      },
    },
    // Reduce build complexity
    chunkSizeWarningLimit: 2000,
    minify: 'esbuild', // Faster than terser
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: false, // Single CSS file for faster loading
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@react-three/fiber', '@react-three/drei'], // Skip heavy 3D deps for now
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});