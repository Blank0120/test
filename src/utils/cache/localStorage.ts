/** 统一处理 localStorage */

import CacheKey from "@/constants/cacheKey"

export const getSidebarStatus = () => {
  return localStorage.getItem(CacheKey.SIDEBAR_STATUS)
}
export const setSidebarStatus = (sidebarStatus: "opened" | "closed") => {
  localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus)
}

export const getActiveThemeName = () => {
  return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME)
}
export const setActiveThemeName = (themeName: string) => {
  localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
}
