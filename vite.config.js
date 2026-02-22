import { defineConfig } from 'vite'

export default defineConfig({
  // public folder is served as-is (our index.html lives there)
  publicDir: false,
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  define: {
    // Inject the env var as a global JS constant at build time
    __VITE_API_KEY__: JSON.stringify(process.env.VITE_API_KEY || ''),
  },
})
