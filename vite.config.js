import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures correct routing in Vercel
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['typescript'],  // If necessary
    },
  },
});

