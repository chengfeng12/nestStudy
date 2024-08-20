<script setup lang="ts">
const fetchFile = async (url: string) => {
  const res = await fetch(url).then((res) => res.arrayBuffer())
  const blob = new Blob([res])
  const tempUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = tempUrl
  a.download = '下载文件.zip'
  a.click()
  a.remove()
}
const download = () => {
  fetchFile('http://localhost:3000/upload/stream')
}
</script>

<template>
  <main>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div h-full text-center flex select-none all:transition-400>
      <div ml200px m100px>
        <div text-30px fw500 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-carbon-logo-github
            c-green
            text-inherit
            href="https://github.com/unocss/unocss"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
      on-demand · instant · fully customizable
    </div>

    <div text-center m-auto w200px bg-amber py-20px b-rd-10px @click="download">下载</div>
  </main>
</template>
