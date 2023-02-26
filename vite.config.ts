import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 9999,
    /** 是否自动打开浏览器 */
    open: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: true,
    /** 接口代理 */
    proxy: {
      "/api/v1": {
        target: "https://mock.mengxuegu.com/mock/63fb084f7c016026ff2b8ad1",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace("/api/v1", "/tourist/mock")
      }
    }
  },
})
