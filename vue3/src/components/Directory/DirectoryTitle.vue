<script setup lang="ts" name="DirectoryTitle">
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
  size: 'large'
})
// 如需要默认值需要搭配 withDefaults 使用 withDefaults(defineProps<ProopsType>(), {})
const Size = {
  large: 'text-[20px]',
  middle: 'text-[16px]',
  small: 'text-[14px]'
}
const titleStyle = computed(() => {
  const className = `${Size[props.size]}`
  return className
})
</script>

<template>
  <div class="directory-title">
    <div class="title flex items-center">
      <span class="icon text-[14px] inline-block w16px h16px" v-if="props.icon">
        <slot name="icon">
          {{ props.icon }}
        </slot>
      </span>

      <slot name="title">
        <div class="title-text font-bold color-[#333333] m-t-4px m-b-4px ellipsis-text" :class="titleStyle">
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

/* 设置容器宽度和样式 */
.ellipsis-text {
  white-space: nowrap; /* 确保文本在一行内显示 */
  overflow: hidden; /* 隐藏超出容器的文本 */
  text-overflow: ellipsis; /* 超出部分显示省略符号 */
}

.directory-title {
  & + .directory-title {
    margin-top: 20px;
  }
}
</style>
