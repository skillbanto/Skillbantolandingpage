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
      // Externalize heavy dependencies to CDN
      external: [
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-three/postprocessing',
      ],
      output: {
        globals: {
          'three': 'THREE',
          '@react-three/fiber': 'ReactThreeFiber',
          '@react-three/drei': 'ReactThreeDrei',
          '@react-three/postprocessing': 'ReactThreePostprocessing',
        },
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    minify: 'esbuild',
    target: 'es2020',
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});