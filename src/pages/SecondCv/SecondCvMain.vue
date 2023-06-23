<script setup lang="ts">
import { ref } from 'vue';

const languagesSlide = ref(false)
const specializationSlide = ref(false)
const resumeSlide = ref(false)

function check() {

}

</script>

<template>
  <div class="h-4/4 w-full">

    <div class="bg-black grid grid-cols-4 items-center justify-center w-full h-1/4">
      <button class="bg-red-800 p-2 h-full text-white"
      :disabled="resumeSlide || specializationSlide || languagesSlide">Intro</button>
      <button @click="languagesSlide = !languagesSlide" class="bg-blue-700 p-2 h-full text-white"
        :disabled="resumeSlide || specializationSlide">Languages</button>
        <button class="bg-purple-700 p-2 h-full text-white" :disabled="resumeSlide"
          @click="specializationSlide = !specializationSlide">Specialization</button>
      <button class="bg-gray-700 p-2 h-full text-white" @click="resumeSlide = !resumeSlide">Resume</button>
    </div>

    <div class="flex flex-row w-full h-3/4">

      <div class=" translate-x-0 fixed transition-all duration-300 w-full h-full bg-red-800">
        <div class="flex flex-col md:flex-row w-3/3 md:h-full">
          <div class="h-full flex items-center w-full md:w-1/3">
            <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">ABOUT ME</h1>
          </div>
          <div class="md:w-2/3 flex flex-col gap-5 justify-center text-white">
            <p class="text-center md:text-3xl">Hi,Iam Volkan Filazi</p>
            <p class="text-center md:text-3xl">Iam a Web and Android Developer</p>
          </div>
          <div class="flex flex-col items-center gap-5 mt-5">
            <p class="text-yellow-400">+10 <span class="text-white">projects</span></p>
            <p class="text-yellow-400">+10 <span class="text-white">projects</span></p>
            <p class="text-yellow-400">+10 <span class="text-white">projects</span></p>
            <p class="text-yellow-400">+10 <span class="text-white">projects</span></p>
          </div>
        </div>
      </div>

      <div class=" translate-x-full opacity-0 fixed transition-all duration-500 w-full h-full bg-blue-800"
        :class="[{ '!translate-x-0': languagesSlide },{ '!opacity-100': languagesSlide }]"></div>
      <div class=" translate-x-full fixed transition-all duration-300 w-full h-full bg-purple-700"
        :class="[{ '!translate-x-0': specializationSlide }]"></div>
      <div class=" translate-x-full fixed transition-all duration-300 w-full h-full bg-gray-700"
        :class="[{ '!translate-x-0': resumeSlide }]"></div>
    </div>

  </div>
</template>

<style scoped>:disabled {
  opacity: 0.1;
}</style>
