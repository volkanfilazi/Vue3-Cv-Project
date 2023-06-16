<script setup lang="ts">
import { useStorage } from '@vueuse/core';
const darkmode = useStorage("darkmode", Boolean)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
  <div class="w-[160px] flex justify-end">
    <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"
      :style="{ borderColor: darkmode ? 'red' : '' }"></div>
  </div>
  <h1 class="text-white font-bold text-[20px]" :style="{ color: darkmode ? 'black' : '' }"><slot></slot></h1>
  <div class="w-[160px] flex justify-start">
    <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"
      :style="{ borderColor: darkmode ? 'red' : '' }"></div>
  </div>
</div>
</template>