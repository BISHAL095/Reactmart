import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    
  ],
  test: {
    globals: true, // Makes test APIs (describe, test, expect) globally available
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/tests/setup.js', // Path to the setup file
    css: true, // Handles CSS imports
  },
})
