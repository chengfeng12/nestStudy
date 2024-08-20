/// <reference types="vite/client" />

// typescript 只能理解.ts的文件, .vue的解析不了 解析 vue 文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
