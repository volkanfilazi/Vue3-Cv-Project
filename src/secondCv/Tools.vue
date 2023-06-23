<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useToolsStore } from '../Store/Tools.store'

const toolsStore = useToolsStore()

</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center w-3/3 md:h-full">
    <div class="flex items-center md:h-full w-full md:w-1/4">
      <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">TOOLS</h1>
    </div>
    <div class="md:w-3/4 p-5 gap-2 h-full md:h-auto grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="tools in toolsStore.toolsAray"
        class="flex gap-2 p-1 hover:text-yellow-400 text-white rounded-md font-bold items-center transition-all duration-500 hover:bg-black  border-[1px] border-yellow-400"
        >
        <Icon class="w-1/3" style="color: yellow" :icon="tools.image" width="48" height="48"/>
        <p class="text-center w-2/3">{{ tools.toolName }}</p>
      </div>
    </div>
  </div>
</template>