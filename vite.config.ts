import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    // Important: process.env.API_KEY is replaced by the actual value during build
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    // base: '/' ensures it works with custom domains (e.g. yourdomain.com)
    // If you were NOT using a custom domain, this would need to be '/repo-name/'
    base: '/', 
  };
});