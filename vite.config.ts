import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        app: "/src/app",
        components: '/src/components',
        hooks: '/src/hooks',
        types: '/src/types',
        utils: '/src/utils',
      }
    },
    server: {
      port: 3001,
    }
  }
})
