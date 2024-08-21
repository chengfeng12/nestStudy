<script setup lang="ts">
import Layout from '@/components/Loayout/index.vue'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b'
      }
    }"
  >
    <Layout></Layout>
  </a-config-provider>
</template>

<style lang="scss" type="text/scss" scoped>
@import "@/assets/styles/index.scss";
</style>


