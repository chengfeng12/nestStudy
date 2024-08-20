<template>
  <!-- <template>
  <div class="flex flex-col items-center justify-center">
  </div>
</template> -->
  <div class="h-100vh flex overflow-hidde">
    <SideBar></SideBar>
    <div class="h-100vh bg-#f6f6f6 overflow-y-auto w-100%">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideBar from '@/components/Loayout/SideBar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" type="text/scss" scoped>
</style>
