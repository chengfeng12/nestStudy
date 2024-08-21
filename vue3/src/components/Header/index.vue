<script setup lang="ts" name="Header">
import { ref, defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  sticky: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="h-80px bg-#fff flex items-center box-sizing-border-box p-20px"
    :class="{
      'position-sticky top-0 left-0 right-0': sticky
    }"
    style="
      backdrop-filter: saturate(50%) blur(4px);
      background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
      background-size: 4px 4px;
    "
  >
    <div class="fost-32px font-bold">{{ props.title }}</div>
  </div>
</template>

<style lang="scss" type="text/scss" scoped></style>
