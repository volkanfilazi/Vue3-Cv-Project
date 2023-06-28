<script setup lang="ts">
import { useRouter } from "vue-router";
import { useSpecializationStore } from '../Store/Specialization';
import VButton from '../components/V-Base/V-Button.vue';
import { Icon } from '@iconify/vue';

const specializationStore = useSpecializationStore()
const router = useRouter()

</script>

<template>
  <div class="flex flex-col h-full md:flex-row md:items-center w-3/3 md:h-full">
    <div class="flex items-center w-full md:w-1/4">
      <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">
        Specialization</h1>
    </div>

    <div class="w-full md:w-4/5 p-1 md:p-0 text-white text-sm md:text-lg md:mt-5 gap-2 md:h-1/2 grid grid-cols-1 md:grid-cols-3">
      <div v-for="items in specializationStore.specializationArray"
        class="w-full group border-[1px] flex flex-col md:h-[1/2] transition-all duration-300 hover:border-yellow-400">

        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ {{ items.name }} ~
          </h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400" :icon="items.image" width="36"
            height="36" />
        </div>
        <div class="h-2/5 sm:h-2/3 md:justify-center flex flex-col p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">{{ items.thema }}</span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">{{ items.frameworks }}</span>
          </p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">{{ items.packages }}</span></p>
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
