// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default defineConfig({
  resolve: {
    alias: {
      'stream': 'stream-browserify'
    }
  },
  optimizeDeps: {
    include: ['stream-browserify']
  }
});
