<script setup lang="ts" name="name">
import { reactive, ref } from 'vue'
import DirectoryTitle from '@/components/Directory/DirectoryTitle.vue'
import DirectorySubTitle from '@/components/Directory/DirectorySubTitle.vue'
import { data } from './data'
const titles = reactive(data)

const tabList = [
  {
    key: 0,
    label: '应用领域'
  },
  {
    key: 1,
    label: '应用专题'
  }
]
const tabIndex = ref<number>(0)
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
      <div class="box">
        <div
          v-for="(item, index) in tabList"
          :key="item.key"
          @click="tabIndex = item.key"
          :class="['item', index / 0 ? 'item-even' : 'item-odd']"
          :style="{
            '--evenColor': item.key === tabIndex ? '#edf4fa' : '#fff',
            '--oddColor': item.key === tabIndex ? '#edf4fa' : '#fff'
          }"
        >
          <span> {{ item.label }}</span>
        </div>
      </div>

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
.box {
  display: flex;
  margin-top: 10px;
  .item span {
    display: block;
    transform: skew(-20deg);
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
  .item {
    flex: 1;
    height: 50px;
    position: relative;
    transform: skew(20deg);
  }
  .item::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
  }

  // 奇数
  .item-odd {
    background-color: var(--oddColor);
    border-radius: 0 15px 0 0;
  }
  //右边弧形三角
  .item-odd::before {
    background: radial-gradient(
      circle at 100% 0,
      transparent,
      transparent 20px,
      var(--oddColor) 10px
    );
    bottom: 0;
    right: -20px;
  }
  //左边的方块
  .item-odd::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: var(--oddColor);
    left: -10px;
    top: 0;
    transform: skew(-20deg);
  }

  // 偶数
  .item-even {
    background-color: var(--evenColor);
    border-radius: 0 0 0 15px;
  }
  //左边弧形三角
  .item-even::before {
    background: radial-gradient(
      circle at 0 100%,
      transparent,
      transparent 20px,
      var(--evenColor) 20px
    );
    top: 0;
    left: -20px;
  }
  //右边的方块
  .item-even::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: var(--evenColor);
    right: -10px;
    top: 0;
    transform: skew(-20deg);
  }
}
</style>
