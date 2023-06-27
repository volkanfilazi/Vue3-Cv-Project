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
    class="observed-sections flex md:p-2 flex-col mt-20 md:mt-40 w-full items-center justify-center transition-all duration-500 relative min-h-screen gap-5">
    <div class="flex md:mt-0 w-full items-center justify-center mt-5">
          <h1
            class="text-white rounded-lg text-center p-1 font-bold text-[20px] md:text-[30px]"
            :style="[{ color: darkmode ? 'black' : '' }, { borderColor: darkmode ? 'black' : '' }]"
            :class="{ '!shadow-red-500': darkmode }">
            {{ $t('myspecialization') }}</h1>
      </div>
      <input class="outline-none bg-transparent focus:text-yellow-400 focus:border-yellow-400 px-3 border-[1px] rounded-md w-1/2 p-1" placeholder="Search a project name" type="text"
      :class="[{'!border-black' : darkmode},{'!text-black' : darkmode}]">
    <div
      class="w-full md:w-4/5 p-1 md:p-0 text-white text-sm md:text-lg md:mt-5 gap-2 md:h-1/2 grid grid-cols-1 md:grid-cols-3">
      <div v-for="(items, index) in specializationStore.specializationArray"
        class="w-full group border-[1px] flex flex-col md:h-[500px] transition-all duration-300 hover:border-yellow-400"
        :class="[{ 'hover:!border-red-700': darkmode }, { 'border-black': darkmode }]">

        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <div class="flex w-full items-center gap-1 px-2">
              <p :class="{ '!text-black': darkmode }">Hosting : </p>
              <div class="w-4 h-4 bg-green-500 rounded-full" :class="[{ '!bg-red-500': items.status === 'Offline' },{ '!bg-yellow-500': items.status === 'Continues' }]"></div>
          </div>
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl"
            :class="[{ 'group-hover:!text-red-700': darkmode }, { 'text-black': darkmode }]">~ {{ items.name }} ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400"
            :class="[{ 'group-hover:!text-red-700': darkmode }, { 'text-black': darkmode },]" :icon="items.image"
            width="36" height="36" />
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
          <VButton v-if="items.name === 'Second Cv'" @click="router.push({ name: 'secondCv' })">Live</VButton>
          <VButton v-if="items.name === 'Shop'" @click="router.push({ name: 'shop' })">Live</VButton>
          <VButton v-if="items.name === 'Intelligence Square'" @click="router.push({ name: 'intelligenceSquare' })">Live</VButton>
          <a href="https://github.com/volkanfilazi/DeskBookingSystem"><VButton v-if="items.name === 'Desk Booking System'">Github</VButton></a>
          <VButton v-if="items.name === 'Encryption'" disabled>Coming Soon</VButton>
        </div>
      </div>
    </div>
  </div>
</template>