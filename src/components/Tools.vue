<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useStorage } from '@vueuse/core';
import { useToolsStore } from '../Store/Tools.store'


const toolsStore = useToolsStore()
const darkmode = useStorage("cvDarkmode", Boolean)

</script>
<template>
  <div id="tools"
    class="observed-sections target flex flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex md:mt-0 w-full items-center">
      <div class="w-full h-[1px] bg-white shadow-sm shadow-black" :class="[{'!bg-black' : darkmode},{'!shadow-red-500' : darkmode}]"></div>
      <div class="flex">
        <h1 class="text-white shadow-sm shadow-yellow-400 rounded-lg text-center border-[1px] p-1 font-bold text-[20px] md:text-[30px]" 
        :style="[{ color: darkmode ? 'black' : '' },{ borderColor: darkmode ? 'black' : '' }]" :class="{'!shadow-red-500' : darkmode}">
        {{ $t('tools') }}</h1>
      </div>
      <hr class="text-white w-full opacity-0">
    </div>
    <div class="w-full md:w-4/5 p-2">
      <div
      class="border-[1px] p-5 gap-5 grid grid-flow-row grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="tools in toolsStore.toolsAray"
        class="flex gap-2 p-1 hover:text-yellow-400 text-white rounded-md font-bold items-center transition-all duration-500 hover:bg-black  border-[1px] border-yellow-400"
        :style="[{ color: darkmode ? 'red' : '' }, { borderColor: darkmode ? 'red' : '' }]">
        <Icon class="w-1/3" style="color: yellow" :icon="tools.image" width="48" height="48"
          :style="{ color: darkmode ? 'red' : 'yellow' }" />
        <p class="text-center w-2/3">{{ tools.toolName }}</p>
      </div>
    </div>
    </div>
  </div>
</template>