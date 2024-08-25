<script setup lang="ts" name="name">
import { ref } from 'vue'
</script>

<template>
  <!-- 依赖于 基准值 flex-basis, 默认为 0，如果元素有宽度了，那么基准值就不是 0，剩下的空间会平均分然后加上基准值的宽度 -->
  <div>没有内容时</div>
  <div class="h-50vh flex">
    <div
      v-for="i in ['#456a9f', '#ff9a9e', '#fab1a0']"
      :key="i"
      :style="{
        backgroundColor: i
      }"
      class="flex-grow-[1]"
    ></div>
  </div>
  <!-- 问题 -->
  <div m-t-20px>有内容时,造成的问题</div>
  <div class="h-50vh flex">
    <div
      v-for="(i, index) in ['#456a9f', '#ff9a9e', '#fab1a0']"
      :key="i"
      :style="{
        backgroundColor: i
      }"
      class="flex-grow-[1]"
    >
      <p v-if="index === 0">
        flex属性是 flex-grow属性、flex-shrink属性、flex-basis属性的简写。默认值为：0 1 auto；
      </p>
    </div>
  </div>

  <!-- 改造后 -->
  <div m-t-20px>改造后</div>
  <div class="h-50vh flex">
    <div
      v-for="(i, index) in ['#456a9f', '#ff9a9e', '#fab1a0']"
      :key="i"
      :style="{
        backgroundColor: i
      }"
      class="flex-1"
    >
      <p v-if="index === 0">
        flex: 1;<br />
        首先 flex: 1; 等同于 flex: 1 1 0;<br />
        等同于 flex-grow: 1; flex-shrink: 1; flex-basis: 0;<br />
        ps: flex-shrink 收缩规则。主要处理当 flex
        容器空间不足时候，单个元素的收缩比例。当父元素的宽度小于子元素宽度之和并且超出了父元素的宽度时，flex-shrink
        就会按照一定的比例进行收缩：将子元素宽度之和与父元素宽度的差值按照子元素 flex-shrink
        的值分配给各个子元素，每个子元素原本宽度减去按比例分配的值，其剩余值为实际宽度。 <br />
        flex属性是<br />
        flex-grow属性、flex-shrink属性、flex-basis属性的简写。默认值为：0 1 auto；
      </p>
    </div>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
p {
  color: #fff;
  padding: 10px;
  line-height: 30px;
}
</style>
