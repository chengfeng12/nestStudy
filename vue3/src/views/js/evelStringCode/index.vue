<script setup lang="ts">
import { ref } from 'vue'
var a = 1
var codeString = ref('console.log("a", a)')
function run(code: string) {
  var a = 2
  // 1 eval 同步代码 局部作用域 打印 2
  eval(code)


  /* vue3 中项目会报   a is not defined */
  /* // 2 setTimeout 异步代码 全局作用域  打印 1
  setTimeout(code)

  // 3 新建 script 标签 同步代码 全局作用域 打印 1 ，会新增一个标签
  var script = document.createElement('script');
  script.innerText = code;
  document.body.appendChild(script)

  // 4 创建一个 function 同步代码 全局作用域 打印 1
  new Function(code)() */

  // 还有别的方式
}
run(codeString.value)
</script>

<template>
  <div></div>
</template>

<style lang="scss" type="text/scss" scoped></style>
