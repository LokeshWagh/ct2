import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['typescript'],  // Adjust this if needed
    },
  },
  base: './',  // Ensures correct asset paths
});
