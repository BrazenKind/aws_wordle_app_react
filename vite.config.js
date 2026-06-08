import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase",
      generateScopedName:"[local]_[hash:base64:2]"
    }
  },
  define: {
    __API_BASE_URL__:JSON.stringify("https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_6/"),
  }
})
