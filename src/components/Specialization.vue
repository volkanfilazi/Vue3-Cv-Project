<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import VButton from './V-Base/V-Button.vue';
import { useSpecializationStore } from '../Store/Specialization';
import { useStorage } from '@vueuse/core';
import { ref, watchEffect } from 'vue';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectsFilterBar from './ProjectsFilterBar.vue'

const specializationStore = useSpecializationStore()
const darkmode = useStorage("cvDarkmode", Boolean)
const like = useStorage("like", Array(specializationStore.specializationArray.length).fill(false))
const likeAnimation = ref(Array(specializationStore.specializationArray.length).fill(false))
const router = useRouter()

function intelligenceSquareOpenNewTab() {
  const routeURL = router.resolve({ name: 'intelligenceSquare' }).href;
  window.open(routeURL, '_blank');
}

function shopOpenNewTab() {
  const routeURL = router.resolve({ name: 'shop' }).href;
  window.open(routeURL, '_blank');
}

function likeUpdate(index) {
  likeAnimation.value[index] = true
  like.value[index] = !like.value[index]
  setTimeout(() => {
    likeAnimation.value[index] = false
  }, 2000)
}

</script>
<template>
  <div id="specialization"
    class="observed-sections flex md:p-2 p-1 flex-col mt-20 md:mt-40 w-full transition-all duration-500 relative min-h-screen">
    <div class="flex md:mt-0 w-full items-center justify-center mt-5">
      <h1 class="text-white rounded-lg text-center p-1 font-bold text-[20px] md:text-[30px]"
        :style="[{ color: darkmode ? 'black' : '' }, { borderColor: darkmode ? 'black' : '' }]"
        :class="{ '!shadow-red-500': darkmode }">
        {{ $t('Projects') }}</h1>
    </div>
    <ProjectsFilterBar></ProjectsFilterBar>
    <div class="flex flex-col md:flex-row mt-2 w-full justify-center gap-2" :class="{'items-center' : specializationStore.copySpecializationArray.length <= 0}">
      <ProjectsFilter></ProjectsFilter>
      <div
        class="w-full lg:w-4/5 md:p-0 text-white text-sm md:text-lg gap-2 md:h-1/2 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" 
        :class="[{'lg:!w-full' : !specializationStore.mainFilterToggle},
        {'!flex' : specializationStore.copySpecializationArray.length <= 0},
        {'!items-center' : specializationStore.copySpecializationArray.length <= 0},
        {'!justify-center' : specializationStore.copySpecializationArray.length <= 0},
        ]">
        <div v-if="specializationStore.copySpecializationArray.length > 0" v-for="(items, index) in specializationStore.copySpecializationArray"
          class="w-full group border-[1px] flex flex-col md:h-[500px] transition-all duration-300 hover:border-yellow-400"
          :class="[{ 'hover:!border-red-700': darkmode }, { 'border-black': darkmode }]">

          <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
            <div class="flex w-full items-center gap-1 px-2 justify-between">
              <div class="flex w-full items-center gap-1 px-2">
                <p :class="{ '!text-black': darkmode }">Hosting : </p>
                <div class="w-4 h-4 bg-green-500 rounded-full"
                  :class="[{ '!bg-red-500': items.status === 'Offline' }, { '!bg-yellow-500': items.status === 'Continues' }]">
                </div>
              </div>
              <div class="relative">
                <span class="text-yellow-400 absolute -top-6"
                  :class="{ 'animate-bounce': likeAnimation[index] && like[index] }">{{ likeAnimation[index] &&
                    like[index]
                    ? '+1' : '' }}</span>
                <p :class="{'!text-black' : darkmode}">{{ like[index] ? items.numberOfLikes + 1 : items.numberOfLikes }}</p>
              </div>
              <Icon @click="likeUpdate(index)" class="cursor-pointer text-gray-500" icon="icon-park-solid:like" width="30"
                height="30" :class="{ 'text-yellow-400': like[index] }" />
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
            <p class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">Languages and Frameworks :
            <div class="grid grid-cols-3 gap-2 text-center">
              <div :style="{ color: darkmode ? 'black' : '' }" v-for="elements in items.frameworks">
                <p class="text-orange-500 rounded-lg border-[1px]">{{ elements }}</p>
              </div>
            </div>
            </p>
            <p class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">Used Packages : <span class="text-white"
                :style="{ color: darkmode ? 'black' : '' }">{{ items.packages }}</span></p>
          </div>

          <div class="flex h-1/5 justify-center mt-5 md:mt-0 items-center md:mb-0">
            <VButton v-if="items.name === 'Shop'" @click="shopOpenNewTab()">Live Preview</VButton>
            <VButton v-if="items.name === 'Intelligence Square'" @click="intelligenceSquareOpenNewTab()">Live Preview</VButton>
          
            <a href="https://github.com/volkanfilazi/DeskBookingSystem" target="_blank">
              <VButton v-if="items.name === 'Desk Booking System'">Github</VButton>
            </a>
            <VButton v-if="items.name === 'Second Cv'" @click="router.push({ name: 'secondCv' })" disabled>Coming Soon
            </VButton>
            <VButton v-if="items.name === 'Encryption'" disabled>Coming Soon</VButton>
            <a href="https://github.com/volkanfilazi/Android-Kotlin-Codagram" target="_blank">
              <VButton v-if="items.name === 'Codagram'">Github</VButton>
            </a>
          </div>
        </div>
        <div v-else class="w-full flex flex-col items-center lg:w-4/5 md:p-0 text-white text-sm md:text-lg gap-2">
          <Icon icon="ph:bag-fill" width="42" height="42" color="white" />
          <p class="w-full text-center">Project not found</p>
          <p class="w-full text-center">Check the selected filters or try other search criteria.</p>
        </div>
      </div>
    </div>

  </div>
</template>