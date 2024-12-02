import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber', 'three'], // Add any other problematic dependencies here
    exclude: ['js-big-decimal'],
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
  server: {
    port: 8000
  },
  base: './',
});
