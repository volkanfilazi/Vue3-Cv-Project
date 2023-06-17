<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useStorage } from '@vueuse/core';
import { useToolsStore } from '../Store/Tools.store'

const toolsStore = useToolsStore()
const darkmode = useStorage("cvDarkmode", Boolean)

</script>
<template>
  <div id="tools"
    class="observed-sections target flex p-2 md:p-0 flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex flex-col mt-10 md:mt-0 w-full justify-center items-center">
      <h1 class="text-white font-bold text-[20px] md:text-[30px]" :style="{ color: darkmode ? 'black' : '' }">{{
        $t('tools') }}</h1>
    </div>
    <div class="flex gap-2">
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-yellow-400" :style="{ backgroundColor: darkmode ? 'red' : '' }"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
    </div>
    <div
      class="w-full md:w-4/5 border-[1px] p-5 gap-5 grid grid-flow-row grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="tools in toolsStore.toolsAray"
        class="flex gap-2 p-1 hover:text-yellow-400 text-white rounded-md font-bold items-center transition-all duration-500 hover:bg-black  border-[1px] border-yellow-400"
        :style="[{ color: darkmode ? 'red' : '' }, { borderColor: darkmode ? 'red' : '' }]">
        <Icon class="w-1/3" style="color: yellow" :icon="tools.image" width="48" height="48"
          :style="{ color: darkmode ? 'red' : 'yellow' }" />
        <p class="text-center w-2/3">{{ tools.toolName }}</p>
      </div>
    </div>
  </div>
</template>