import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber', 'three'], // Add any other problematic dependencies here
    exclude: ['js-big-decimal'],
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
  },
  plugins: [react()],
  server: {
    port: 8000
  },
  base: './',
});
