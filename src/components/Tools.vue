<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
  <div id="tools"
    class="observed-sections target flex p-2 md:p-0 flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex flex-col mt-10 md:mt-0 w-full justify-center items-center">
      <h1 class="text-white font-bold text-[20px] md:text-[30px]">Tools</h1>
    </div>
    <div class="flex gap-2">
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-yellow-400"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
    </div>
    <div
      class="w-full md:w-4/5 border-[1px] p-5 gap-5 grid grid-flow-row grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="fluent:javascript-16-regular" color="yellow" width="48" height="48" />
        <p>Javascript</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="carbon:logo-vue" color="yellow" width="48" height="48" />
        <p>Vue</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="la:node" color="yellow" width="48" height="48" />
        <p>Node</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="mdi:language-java" color="yellow" width="48" height="48" />
        <p>Java</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="mdi:language-kotlin" color="yellow" width="48" height="48" />
        <p>Kotlin</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="fontisto:mongodb" color="yellow" width="48" height="48" />
        <p>MongoDB</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="mdi:language-typescript" color="yellow" width="48" height="48" />
        <p>Typescript</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="file-icons:tailwind" color="yellow" width="48" height="48" />
        <p>Tailwind</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="icomoon-free:html-five" color="yellow" width="48" height="48" />
        <p>Html</p>
      </div>
      <div
        class="flex gap-2 p-1 hover:text-yellow-400 rounded-md text-white font-bold items-center transition-all duration-500 hover:bg-black justify-center border-[1px] border-yellow-400">
        <Icon icon="ph:git-branch-bold" color="yellow" width="48" height="48" />
        <p>GIT</p>
      </div>
    </div>
  </div>
</template>