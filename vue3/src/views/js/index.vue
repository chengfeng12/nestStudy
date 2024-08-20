<template>
  <Header :title="title"></Header>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRoute } from '@/hooks'
const { route } = useRoute()
console.log(route, 'routerouteroute');
const title = ref(route.meta.title)

</script>

<style lang="scss" type="text/scss" scoped></style>
