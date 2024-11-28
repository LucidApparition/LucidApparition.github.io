import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber', 'three'], // Add any other problematic dependencies here
    exclude: ['js-big-decimal']
  },
  server: {
    port: 8000
  }
});
