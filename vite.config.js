import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  preview: {
    allowedHosts: true
  },
  build: {
    // Target modern browsers for smaller, faster bundles
    target: 'es2020',
    // Inline small assets (< 4 KB) as base64 to reduce requests
    assetsInlineLimit: 4096,
    // Enable CSS code splitting per chunk
    cssCodeSplit: true,
    // Produce source maps only in dev; omit in prod for smaller bundle
    sourcemap: false,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and lazy loading
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
        },
        // Use content hashes for long-term caching
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      }
    }
  }
})
