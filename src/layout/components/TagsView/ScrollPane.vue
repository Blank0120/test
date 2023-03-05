<template>
  <div class="scroll-container">
    <div class="scrollbar-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-container {
  height: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;

  .scrollbar-content {
    display: inline-block;
  }
}
</style>
