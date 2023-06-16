<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const darkmode = useStorage("darkmode", Boolean)

export interface Props {
  isLoading?: boolean
}
const prop = withDefaults(defineProps<Props>(), {
  isLoading: false
})


</script>
<template>
    <button :disabled="isLoading"
      class="border-[2px] transition-all duration-500 hover:border-yellow-400 hover:w-[200px] relative w-[120px] h-10 text-center border-yellow-600 text-white"
      :style="[{color : darkmode ? 'black' : 'white'},{borderColor : darkmode ? 'red' : ''}]">
      <slot></slot>
      <span
        class="top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full absolute animate-ping" :style="{backgroundColor : darkmode ? ' red' : ''}"></span></button>
</template>

<style scoped>
:disabled {
  opacity: 0.30;
  pointer-events: none
}
</style>