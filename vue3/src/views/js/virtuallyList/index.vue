<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'

interface ScrollOpsType {
  contentNumber: number
  rowHeight: number
  dataList: Array<number>
  el: string | HTMLElement
  scrollbarEl: HTMLElement
  viewEl: HTMLElement
}
interface ScrollListType extends ScrollOpsType {
  el: HTMLElement
  contentNumber: number
  rowHeight: number
  viewHeight: number
  listHeight: number
  scrollbarHeight: number
  dataList: Array<any>
  start: number
  end: number
  showList: Array<number>
  offSet: number
}

class Scroll {
  listOptions: ScrollListType
  constructor(options: ScrollOpsType) {
    const { contentNumber, rowHeight, dataList, el, scrollbarEl, viewEl } = options
    this.listOptions = {
      el: this.getEl(el),
      contentNumber,
      rowHeight,
      dataList,
      viewHeight: contentNumber * rowHeight,
      listHeight: contentNumber * rowHeight,
      scrollbarHeight: rowHeight * dataList.length,
      start: 0,
      end: contentNumber,
      showList: [],
      offSet: 0,
      scrollbarEl,
      viewEl
    }
    this.init()
  }
  getEl(el: string | HTMLElement): HTMLElement {
    if (typeof el === 'string') {
      return document.querySelector(el) as HTMLElement
    }
    return el || document.body
  }
  init() {
    const { scrollbarEl, viewEl, scrollbarHeight, viewHeight, listHeight, rowHeight, el } =
      this.listOptions
    this.listOptions.showList = this.getNewList()
    scrollbarEl.setAttribute('style', `height: ${scrollbarHeight}px;`)
    viewEl.setAttribute('style', `height: ${viewHeight}px;--rowHeight: ${rowHeight}px;`)
    el.setAttribute('style', `height: ${listHeight}px;`)
    this.createEle()
  }
  getNewList(): Array<number> {
    const { dataList, start, end } = this.listOptions
    return dataList.slice(start, end)
  }
  createEle() {
    const { showList, el } = this.listOptions
    let fragment = document.createDocumentFragment()
    showList.forEach((item) => {
      let divDom = document.createElement('div')
      divDom.className = 'v-scroll-row list-row'
      divDom.style.height = `${this.listOptions.rowHeight}px`
      divDom.textContent = `${item}`
      fragment.appendChild(divDom)
    })
    el.appendChild(fragment)
  }
  updateView(offSet: number) {
    const { rowHeight, start } = this.listOptions
    this.listOptions.offSet = offSet
    let offSetNum = Math.round(offSet / rowHeight)
    this.listOptions.start = offSetNum
    this.listOptions.end = start + 20
    requestAnimationFrame(() => {
      this.renderContent()
    })
  }
  renderContent() {
    const { offSet } = this.listOptions
    const rowList = document.querySelectorAll('.v-scroll-row')
    const rowListArray = Array.from(rowList) as HTMLElement[]
    const list = this.getNewList()
    rowListArray.forEach((elm, index) => {
      if (list[index]) {
        elm.textContent = `${list[index]}`
      } else elm.textContent = ''
    })
    this.listOptions.el.style.transform = `translateY(${offSet}px)`
  }
}
let scrollInstance = reactive({}) as Scroll
onMounted(() => {
  let viewContent = document.querySelector('.view-content') as HTMLElement
  let scrollbar = document.querySelector('.scrollbar') as HTMLElement
  let listDom = document.querySelector('.list') as HTMLElement
  let dataList = new Array(200).fill(null).map((item, i) => i + 1)
  scrollInstance = new Scroll({
    dataList,
    contentNumber: 10,
    rowHeight: 30,
    el: listDom,
    viewEl: viewContent,
    scrollbarEl: scrollbar
  })
  viewContent.addEventListener('scroll', (e) => {
    let offSet = (e.target as HTMLElement).scrollTop
    scrollInstance.updateView(offSet)
  })
})

onBeforeUnmount(() => {
  let viewContent = document.querySelector('.view-content') as HTMLElement
  viewContent.removeEventListener('scroll', (e) => {
    let offSet = (e.target as HTMLElement).scrollTop
    scrollInstance.updateView(offSet)
  })
})
</script>

<template>
  <div class="view-content">
    <div class="scrollbar"></div>
    <div class="list"></div>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
.view-content {
  background: #456a9f;
  position: relative;
  overflow-y: auto;
  margin: 20px 80px;
}

.list {
  position: absolute;
  left: 0;
  top: 0;
}
::v-deep {
  .list-row {
    height: var(--rowHeight);
    padding: 0 20px;
    color: #fff;
  }
}
</style>
