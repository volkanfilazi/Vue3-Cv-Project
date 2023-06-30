<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const darkmode = useStorage("cvDarkmode", Boolean)


</script>

<template>
  <a class="absolute flex items-center gap-1 z-20 cursor-pointer p-1 text-white right-[5%] md:right-20 top-5 md:top-40 hover:border-yellow-400 transition-all duration-300 border-[1px] rounded-md" href="src/public/volkanFilaziResume.pdf" download>
    <button
      class=""
      :class="[{ 'hover:!border-red-500': darkmode }, { 'border-black': darkmode }]">
      <Icon class="text-yellow-400" icon="academicons:cv-square" width="36" height="36" :style="{ color: darkmode ? 'red' : '' }" />
      <slot></slot>
    </button>
  </a>
</template>