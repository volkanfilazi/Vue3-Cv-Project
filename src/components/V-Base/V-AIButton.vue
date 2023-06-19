<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const darkmode = useStorage("cvDarkmode", Boolean)

export interface Props {
  openProjectInfoToogle?: boolean
}
const prop = withDefaults(defineProps<Props>(), {
  openProjectInfoToogle: false
})

</script>

<template>
  <button :click="openProjectInfoToogle"
    class="absolute z-20 cursor-pointer p-1 text-white right-[45%] md:right-40 top-5 md:top-20 hover:border-yellow-400 transition-all duration-300 border-[1px] rounded-md"
    :class="[{ 'hover:!border-red-500': darkmode }, { 'border-black': darkmode }]">
    <Icon class="text-yellow-400" icon="mdi:robot" width="36" height="36" :style="{ color: darkmode ? 'red' : '' }" />
  </button>
</template>