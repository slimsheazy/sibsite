// vite.config.ts
import { defineConfig, loadEnv, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }): UserConfig => {
  // Load all env vars for this mode from .env, .env.local, etc.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    // Expose API key at build time as process.env.API_KEY in your code
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },

    // Use '/' for custom domains (e.g. sibylhaus.com)
    // For GitHub Pages without a custom domain, this would be '/sibsite/'
    base: '/',
  }
})
