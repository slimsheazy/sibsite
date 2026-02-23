// vite.config.ts
import { defineConfig, loadEnv, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }): UserConfig => {
  // Load all env vars for this mode from .env, .env.local, etc.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    // Path aliases for cleaner imports
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    // Expose API key at build time as process.env.API_KEY in your code
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },

    // Use '/' for custom domains (e.g. sibylhaus.com)
    // For GitHub Pages without a custom domain, this would be '/sibsite/'
    base: '/',

    // Build optimization options
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'icons': ['lucide-react'],
          }
        }
      }
    }
  }
})
