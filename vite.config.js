import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ⭐️ CRITICAL FIX FOR GITHUB PAGES ⭐️
  // Set the base path to the repository name, surrounded by slashes.
  base: '/ReactTutorial/', 
});