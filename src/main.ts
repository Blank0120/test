import { createApp } from 'vue'
import App from '@/App.vue'
import 'element-plus/dist/index.css'

import { loadPlugins } from "@/plugins"
import store from "@/store"
import router from "@/router"
import "@/router/permission"

import "@/styles/index.scss"

const app = createApp(App)


/** 加载插件 */
loadPlugins(app)

app.use(store).use(router).mount("#app")
