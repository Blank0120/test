import router from "@/router"
import { whiteList } from "@/config/white-list"
import { getToken } from "@/utils/cache/cookies"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false })

router.beforeEach((to, _from, next) => {
  NProgress.start()
  // 判断该用户src/config/white-list.ts是否登录
  if (getToken()) {
    next()
  } else {
    // 如果没有 Token
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next("/login")
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
