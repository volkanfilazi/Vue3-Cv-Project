<script setup lang="ts">
import { useCareerStore } from '../Store/Career.store'
const careerStore = useCareerStore()

</script>

<template>
  <div class="flex flex-col h-full md:flex-row w-3/3 md:h-full">
    <div class="flex items-center w-full md:w-1/4">
      <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">Resume
      </h1>
    </div>
    <div class="md:w-3/4 flex flex-col gap-5 items-center justify-center p-2 text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="education in careerStore.careerArray">
            <h1 class="text-xl mb-5 font-bold text-white">{{
              education.mainTitle }}</h1>
            <div v-for="items in education.carrerItems" class="border-l-[1px] text-sm md:text-[16px]">
              <div class="flex w-full justify-center">
                <div class="w-10 h-10 bg-yellow-400 flex items-center justify-center"><span>{{ items.id }}</span></div>
                <div class="bg-gray-500 p-2 flex items-center text-white w-full">
                  <p>{{ items.date }}</p>
                </div>
              </div>
              <div class="p-5">
                <div class="ml-5 justify-center gap-2 h-[110px] grid grid-cols-1">
                  <div class="text-white font-bold h-1/4 flex items-center" >
                    <span>{{ items.title }}</span></div>
                  <div class="text-yellow-400 h-1/4 flex items-center"><span>{{
                    items.name }}</span></div>
                  <div class="text-gray-400 h-2/4 flex items-center"><span>{{items.description }}</span></div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div></template>