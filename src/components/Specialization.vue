<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import VButton from './V-Base/V-Button.vue';
import { useSpecializationStore } from '../Store/Specialization';
import { useStorage } from '@vueuse/core';

const specializationStore = useSpecializationStore()
const darkmode = useStorage("cvDarkmode", Boolean)
const router = useRouter()

</script>
<template>
  <div id="specialization"
    class="observed-sections flex p-2 md:p-0 flex-col mt-20 w-full items-center justify-center transition-all duration-500 relative md:h-screen gap-5">
    <div class="flex flex-col md:mt-0 w-full justify-center items-center">
      <h1 class="text-white font-bold text-[20px] md:text-[30px]" :style="{ color: darkmode ? 'black' : '' }">
        {{ $t('myspecialization') }}</h1>
    </div>
    <div class="flex gap-2">
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-yellow-400" :style="{ backgroundColor: darkmode ? 'red' : '' }"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
    </div>
    <div
      class="w-full md:w-4/5 text-white text-sm md:text-lg md:mt-5 md:h-1/2 flex flex-col gap-2 md:flex md:flex-row md:justify-between">
      <div v-for="items in specializationStore.specializationArray"
      
        class="w-full h-[300px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400"
        :class="[{ 'hover:!border-red-700': darkmode },{ 'border-black': darkmode }]">

        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl"
            :class="[{ 'group-hover:!text-red-700': darkmode }, { 'text-black': darkmode }]">~ {{ items.name }} ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400"
            :class="[{ 'group-hover:!text-red-700': darkmode }, { 'text-black': darkmode },]" :icon="items.image" width="36"
            height="36" />
        </div>
        <div class="h-2/5 sm:h-2/3 md:justify-center flex flex-col p-2">
          <p class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">Project Thema : <span class="text-white"
              :style="{ color: darkmode ? 'black' : '' }">{{ items.thema }}</span></p>
          <p class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">Languages and Frameworks : <span
              class="text-white" :style="{ color: darkmode ? 'black' : '' }">{{ items.frameworks }}</span></p>
          <p class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">Used Packages : <span class="text-white"
              :style="{ color: darkmode ? 'black' : '' }">{{ items.packages }}</span></p>
        </div>
        <div class="flex h-1/5 justify-center items-center md:mb-0">
          <VButton v-if="items.name === 'Shop'" @click="router.push({ name: 'shop' })">Visit</VButton>
          <VButton v-if="items.name === 'Intelligence Square'" @click="router.push({ name: 'intelligenceSquare' })">Visit</VButton>
          <VButton v-if="items.name === 'Encryption'" disabled>Coming Soon</VButton>
      </div>
    </div>
  </div>
</div></template>