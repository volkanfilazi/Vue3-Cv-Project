<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { useCareerStore } from '../Store/Career.store'
const darkmode = useStorage("cvDarkmode", Boolean)

const careerStore = useCareerStore()
</script>
<template>
  <div
    class="observed-sections target mt-10 md:mt-40 flex h-full p-2 mb-10 md:p-0 flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex md:mt-0 w-full items-center justify-center mt-5">
          <h1
            class="text-white rounded-lg text-center p-1 font-bold text-[20px] md:text-[30px]"
            :style="[{ color: darkmode ? 'black' : '' }, { borderColor: darkmode ? 'black' : '' }]"
            :class="{ '!shadow-red-500': darkmode }">
            {{ $t('myresume') }}</h1>
      </div>
    <div class="w-full md:w-4/5 p-1 md:p-5 gap-5 grid h-full grid-flow-row">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="education in careerStore.careerArray">
          <h1 class="text-xl mb-5 font-bold text-white" :style="{color : darkmode ? 'black' : ''}">{{ education.mainTitle }}</h1>
          <div v-for="items in education.carrerItems" class="border-l-[1px] text-sm md:text-[16px]" :style="{borderColor : darkmode ? 'red' : ''}">
            <div class="flex w-full justify-center">
            <div class="w-10 h-10 bg-yellow-400 flex items-center justify-center" :style="{backgroundColor : darkmode ? 'red' : ''}"><span>{{ items.id }}</span></div>
            <div class="bg-gray-500 p-2 flex items-center text-white w-full"><p>{{ items.date }}</p></div>
          </div>
          <div class="p-5">
            <div class="ml-5 justify-center gap-2 h-[110px] grid grid-cols-1">
              <div class="text-white font-bold h-1/4 flex items-center" :style="{color : darkmode ? 'black' : ''}"><span>{{ items.title }}</span></div>
              <div class="text-yellow-400 h-1/4 flex items-center" :style="{color : darkmode ? 'red' : ''}"><span>{{ items.name }}</span></div>
              <div class="text-gray-400 h-2/4 flex items-center" :style="{color : darkmode ? 'gray' : ''}"><span>{{ items.description }}</span></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>