<script setup lang="ts">
import Intro from '../../secondCv/Intro.vue'
import Tools from '../../secondCv/Tools.vue'
import Languages from '../../secondCv/Languages.vue';
import Specialization from '../../secondCv/Specialization.vue'
import Resume from '../../secondCv/Resume.vue'
import { useSliderStore } from '../../Store/SecondCv/SliderToogles.store';
import router from '../../router/router';
import VOtherProjectAnimation from '../../secondCv/V-OtherProjectAnimation.vue';


const sliderStore = useSliderStore()
</script>

<template>
  <div class="h-4/4 w-full">
    <div class="bg-black hidden md:grid grid-cols-5 items-center justify-center w-full h-1/4">
      <button @click="sliderStore.introTrigger()" class="bg-red-800 p-2 h-full text-white">Intro</button>

      <button @click="sliderStore.toolsTrigger()" class="bg-purple-900 p-2 h-full text-white">Tools</button>

      <button @click="sliderStore.languagesTrigger()" class="bg-blue-950 p-2 h-full text-white">Languages</button>

      <button @click="sliderStore.specializationTrigger()" class="bg-orange-950 p-2 h-full text-white">Specialization</button>

      <button @click="sliderStore.resumeTrigger()" class="bg-gray-700 p-2 h-full text-white">Resume</button>
    </div>

    <div class="flex flex-col md:flex-row w-full h-3/4">
      <div class="md:translate-x-full md:opacity-0 md:fixed transition-all duration-300 w-full h-full bg-red-800 md:bg-red-800"
      :class="[{ 'md:!translate-x-0': sliderStore.intro === true }, { 'md:!opacity-100': sliderStore.intro === true }]">
      <VOtherProjectAnimation @click="router.push({name: 'beforeApp'})">Resume 1</VOtherProjectAnimation>
        <Intro></Intro>
      </div>

      <div class="md:translate-x-full md:opacity-0 md:fixed transition-all duration-500 w-full h-full bg-red-800 md:bg-purple-900"
        :class="[{ 'md:!translate-x-0': sliderStore.tools }, { 'md:!opacity-100': sliderStore.tools }]">
        <Tools></Tools>
      </div>

      <div class="md:translate-x-full md:opacity-0 md:fixed transition-all duration-500 w-full h-full bg-red-800 md:bg-blue-950"
        :class="[{ 'md:!translate-x-0': sliderStore.languages }, { 'md:!opacity-100': sliderStore.languages }]">
        <Languages></Languages>
      </div>

      <div class="md:translate-x-full md:opacity-0 md:fixed transition-all duration-500 w-full h-full bg-red-800 md:bg-orange-950"
        :class="[{ 'md:!translate-x-0': sliderStore.specialization }, { 'md:!opacity-100': sliderStore.specialization }]">
        <Specialization></Specialization>
      </div>

      <div class="md:translate-x-full md:opacity-0 md:fixed transition-all duration-500 w-full h-full bg-red-800 md:bg-gray-900"
        :class="[{ 'md:!translate-x-0': sliderStore.resume }, { 'md:!opacity-100': sliderStore.resume }]">
        <Resume></Resume>
      </div>
    </div>

  </div>
</template>

<style scoped>
:disabled {
  opacity: 0.1;
}
</style>
