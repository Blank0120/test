<script lang="ts" setup>
import { computed } from "vue"
import { useAppStore, DeviceType } from "@/store/modules/app"
import { useSettingsStore } from "@/store/modules/settings"
import { AppMain, NavigationBar, TagsView} from "./components"

const appStore = useAppStore()
const settingsStore = useSettingsStore()

const classObj = computed(() => {
  return {
    hideSidebar: !appStore.sidebar.opened,
    openSidebar: appStore.sidebar.opened,
    withoutAnimation: appStore.sidebar.withoutAnimation,
    mobile: appStore.device === DeviceType.Mobile,
    showGreyMode: showGreyMode.value,
    showColorWeakness: showColorWeakness.value
  }
})

const showTagsView = computed(() => {
  return settingsStore.showTagsView
})
const fixedHeader = computed(() => {
  return settingsStore.fixedHeader
})
const showGreyMode = computed(() => {
  return settingsStore.showGreyMode
})
const showColorWeakness = computed(() => {
  return settingsStore.showColorWeakness
})

</script>

<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <Sidebar class="sidebar-container" /> -->
    <div :class="{ hasTagsView: showTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <NavigationBar />
        <TagsView v-if="showTagsView" />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: var(--v3-sidebar-width);
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - var(--v3-sidebar-width));
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: var(--v3-sidebar-hide-width);
  }
  .sidebar-container {
    width: var(--v3-sidebar-hide-width) !important;
  }
  .fixed-header {
    width: calc(100% - var(--v3-sidebar-hide-width));
  }
}
</style>
