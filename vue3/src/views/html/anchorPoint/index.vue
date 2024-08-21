<script setup lang="ts" name="name">
import { reactive, ref } from 'vue'
import DirectoryTitle from '@/components/Directory/DirectoryTitle.vue'
import DirectorySubTitle from '@/components/Directory/DirectorySubTitle.vue'
import { data } from './data'
const titles = reactive(data)
</script>

<template>
  <div class="h-full flex justify-center overflow-hidden">
    <!-- border-r-1 border-r-#333 border-r-solid -->
    <div class="h-full w-240px p-12px">
      <div class="bg-#fff rounded-[8px] shadow-[0_0_10px_#ddd] h-full p-10px overflow-y-auto">
        <DirectoryTitle icon="🍎" :title="item.title" v-for="(item, index) in titles" :key="index">
          <template v-if="item.children">
            <DirectorySubTitle
              :title="chilItem.title"
              :key="cIndex"
              v-for="(chilItem, cIndex) in item.children"
            />
          </template>
        </DirectoryTitle>
      </div>
    </div>
    <div class="w-full h-full overflow-y-auto p-12px">
      <div class="content-item" v-for="(item, index) in titles" :key="index">
        <div class="content-item-title text-[20px] fw-bold mb-12px">
          {{ item.title }}
        </div>
        <div class="content-text m-b-40px" v-if="item.content" v-html="item.content"></div>
        <template v-if="item.children">
          <div :key="cIndex" v-for="(chilItem, cIndex) in item.children">
            <div class="content-item-sub-title text-[16px] fw-bold mb-12px">
              {{ chilItem.title }}
            </div>
            <div
              class="content-sub-text m-b-40px"
              v-if="chilItem.content"
              v-html="chilItem.content"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
.content-item {
  p {
    line-height: 30px;
  }
}
</style>
