import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dns from 'dns'

/**
 * mode -> serve: development
 *         build: production
 * process.cwd() -> root env
 * 
 */
// const env = loadEnv(mode, process.cwd(), '')

// use vite port on dns.lookup()
// https://nodejs.org/api/dns.html#dnssetdefaultresultorderorder
// dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    strictPort: true,
    port: 3000,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@compositions': path.resolve(__dirname,'./src/compositions'),
      '@app_modules': path.resolve(__dirname,'./src/modules'),
      '@views': path.resolve(__dirname,'./src/views'),
      '@store': path.resolve(__dirname,'./src/store'),
    }
  }
})