<template>
  <Header :title="title"></Header>
  <div class="h-[calc(100%-80px)] overflow-y-auto">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRoute } from '@/hooks'
const { route } = useRoute()
console.log(route, 'routerouteroute')
const routeTitle = route.meta.title as string
const title = ref(routeTitle)
</script>

<style lang="scss" type="text/scss" scoped></style>
