<script setup lang="ts" name="DirectorySubTitle">
import { ref, defineProps, withDefaults, computed } from 'vue'
import Icon from '@ant-design/icons-vue'
import * as AntdIconsVue from '@ant-design/icons-vue'
type AntdIconVueType = () => ReturnType<(typeof AntdIconsVue)[keyof typeof AntdIconsVue]>

interface ProopsType {
  title?: string
  icon?: string | AntdIconVueType
  size?: 'large' | 'middle' | 'small'
}
const props = withDefaults(defineProps<ProopsType>(), {
  size: 'middle'
})
// 如需要默认值需要搭配 withDefaults 使用 withDefaults(defineProps<ProopsType>(), {})
const Size = {
  large: 'text-[18px]',
  middle: 'text-[14px]',
  small: 'text-[12px]'
}
const titleStyle = computed(() => {
  const className = `${Size[props.size]}`
  return className
})
</script>

<template>
  <div class="directory-sub-title">
    <div class="title flex items-center">
      <span class="icon text-[14px] inline-block w16px h16px" v-if="props.icon">
        <slot name="icon">
          {{ props.icon }}
        </slot>
      </span>

      <slot name="title">
        <div class="title-text font-bold color-[#333333] m-t-4px m-b-4px" :class="titleStyle">
          {{ props.title }}
        </div>
      </slot>
    </div>
    <div class="title-content m-l-26px">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
.title {
  .icon + .title-text {
    margin-left: 10px;
  }
}
</style>
