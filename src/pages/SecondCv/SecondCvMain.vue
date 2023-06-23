<script setup lang="ts">
import { ref } from 'vue';
import Intro from '../../secondCv/Intro.vue';

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
      <Intro></Intro>
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
