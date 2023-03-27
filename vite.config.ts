/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Auto imports setup
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
