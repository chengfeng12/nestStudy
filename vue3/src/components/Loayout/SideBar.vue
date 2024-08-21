<template>
  <div class="h-100% bg-#001529" style="width: 256px">
    <!-- <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button> -->
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items"
      @click="clickMenu"
    ></a-menu>
  </div>
</template>
<script lang="ts" setup name="SideBar">
import { reactive, watch, h } from 'vue'
import { useSidebarRoutes } from './sidebar'
import { useRouter } from 'vue-router'
const router = useRouter()
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface'

/* 菜单 */
const sidebar = useSidebarRoutes()
const items = reactive(sidebar)
const state = reactive({
  collapsed: false,
  selectedKeys: [sidebar[0].key],
  openKeys: [sidebar[0].key],
  preOpenKeys: [sidebar[0].key]
})
watch(
  () => router.currentRoute.value,
  (to, from) => {
    // 在这里处理路由变化的逻辑
    console.log(`从 ${from.path} 导航到 ${to.path}`)
    state.selectedKeys = [to.path]
    state.preOpenKeys = [from.path]
    state.openKeys = [to.path]
  }
)

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}

const clickMenu = ({ key }: { key: string }) => {
  state.selectedKeys = [key]
  state.openKeys = [key]
  router.push({
    path: key
  })
}
</script>

<style lang="scss" type="text/scss" scoped>
.sidebar {
  width: 256px;
  height: 100%;
}
</style>
