import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"
import { getToken, removeToken, setToken } from "@/utils/cache/cookies"
import { loginApi } from "@/api/login"
import { type ILoginRequestData } from "@/api/login/types/login"
import { resetRouter } from "@/router"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")
  const roles = ref<string[]>([])
  const username = ref<string>("")


  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value
  }
  /** 登录 */
  const login = (loginData: ILoginRequestData) => {
    return new Promise((resolve, reject) => {
      loginApi({
        username: loginData.username,
        password: loginData.password,
        code: loginData.code
      })
        .then((res) => {
          setToken(res.data.token)
          token.value = res.data.token
          resolve(true)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  /** 登出 */
  const logout = () => {
    removeToken()
    token.value = ""
    roles.value = []
    resetRouter()
  }

  return { token, roles, username, setRoles, login, logout, }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
