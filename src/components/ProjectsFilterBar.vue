<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { useSpecializationStore } from '../Store/Specialization';
import { Icon } from '@iconify/vue';
const specializationStore = useSpecializationStore()
const darkmode = useStorage("cvDarkmode", Boolean)

</script>
<template>
  <div class="border-[1px] flex flex-col md:flex-row w-full gap-1 p-2 mt-2 text-white"
    :class="[{ '!text-black': darkmode }, { '!border-black': darkmode }]">
    <div class="flex items-center cursor-pointer text-yellow-400 font-bold" 
    :class="{'!text-red-600' : darkmode}"
    @click="specializationStore.mainFilterToggle = !specializationStore.mainFilterToggle">
      <div>Hidden Filter</div>
      <Icon v-if="specializationStore.mainFilterToggle" class="w-5 h-5 text-yellow-400" :class="{'!text-red-600' : darkmode}" icon="mdi:arrow-bottom" />
      <Icon v-else class="w-5 h-5 text-yellow-400" :class="{'!text-red-600' : darkmode}" icon="mdi:arrow-top" />
    </div>
    <div class="font-bold border-[1px] border-transparent">{{ specializationStore.copySpecializationArray.length }} items
      in</div>
    <div v-if="specializationStore.vue || specializationStore.kotlin || specializationStore.typescript">languages filter:
    </div>
    <div class="grid grid-cols-3 md:flex gap-1">

      <div class="border-[1px] gap-1 flex border-yellow-400 px-1" :class="{ '!border-red-600': darkmode }"
        v-if="specializationStore.vue">
        <div class="w-2/3">vue.js</div>
        <div @click="specializationStore.vue = false"
          class="w-1/3 flex cursor-pointer items-center justify-center px-1 border-l">
          <span>X</span>
        </div>
      </div>

      <div class="border-[1px] gap-1 flex border-yellow-400 px-1" :class="{ '!border-red-600': darkmode }"
        v-if="specializationStore.typescript">
        <div class="w-2/3 min-w-[70px]">typescript</div>
        <div @click="specializationStore.typescript = false"
          class="w-1/3 flex cursor-pointer items-center justify-center px-1 border-l"><span>X</span></div>
      </div>

      <div class="border-[1px] gap-1 flex border-yellow-400 px-1" :class="{ '!border-red-600': darkmode }"
        v-if="specializationStore.kotlin">
        <div class="w-2/3">kotlin</div>
        <div @click="specializationStore.kotlin = false"
          class="w-1/3 flex cursor-pointer items-center justify-center px-1 border-l"><span>X</span></div>
      </div>

    </div>

    <div class="flex gap-1" v-if="specializationStore.hostingSelected">
      <div>hosting filter:</div>
      <div class="border-[1px] gap-1 flex border-yellow-400 px-1" :class="{ '!border-red-600': darkmode }">
        <div>{{ specializationStore.hostingSelected }}</div>
        <div @click="specializationStore.hostingSelected = ''"
          class="flex cursor-pointer items-center justify-center px-1 border-l"><span>X</span></div>
      </div>
    </div>

    <div class="flex gap-1" v-if="specializationStore.ratingSelected">
      <div>rating filter:</div>
      <div class="border-[1px] gap-1 flex border-yellow-400 px-1" :class="{ '!border-red-600': darkmode }">
        <div>{{ specializationStore.ratingSelected }}</div>
        <div @click="specializationStore.ratingSelected = ''"
          class="flex cursor-pointer items-center justify-center px-1 border-l"><span>X</span></div>
      </div>
    </div>
    <button @click="specializationStore.clearAllFilters()"
    v-if="specializationStore.vue || specializationStore.kotlin || specializationStore.typescript || specializationStore.hostingSelected || specializationStore.ratingSelected"
    class="border-[1px] px-1" :class="{'!border-black' : darkmode}">Clear All</button>
</div></template>