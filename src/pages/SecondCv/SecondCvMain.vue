<script setup lang="ts">
import { ref } from 'vue';
import { useIntroSocialMedia } from '../../Store/IntroSocialMedia.store';
import Intro from '../../secondCv/Intro.vue'
import Tools from '../../secondCv/Tools.vue'
import Languages from '../../secondCv/Languages.vue';

const IntroSocialMedia = useIntroSocialMedia()

const intro = ref(true)
const tools = ref(false)
const languages = ref(false)
const specialization = ref(false)
const resume = ref(false)

function introTrigger(){
  tools.value = false
  languages.value = false
  specialization.value = false
  resume.value = false
}

function toolsTrigger(){
  tools.value = true
  languages.value = false
  specialization.value = false
  resume.value = false
}

function languagesTrigger(){
  languages.value = true
  tools.value = false
  specialization.value = false
  resume.value = false
}

function specializationTrigger(){
  specialization.value = true
  languages.value = false
  tools.value = false
  resume.value = false
}

function resumeTrigger(){
  resume.value = true
  specialization.value = false
  languages.value = false
  tools.value = false
}

</script>

<template>
  <div class="h-4/4 w-full">

    <div class="bg-black grid grid-cols-5 items-center justify-center w-full h-1/4">
      <button @click="introTrigger()" class="bg-red-800 p-2 h-full text-white">Intro</button>

      <button @click="toolsTrigger()" class="bg-purple-900 p-2 h-full text-white">Tools</button>

      <button @click="languagesTrigger()" class="bg-lime-800 p-2 h-full text-white">Languages</button>

      <button @click="specializationTrigger()" class="bg-orange-700 p-2 h-full text-white">Specialization</button>

      <button @click="resumeTrigger()" class="bg-gray-700 p-2 h-full text-white">Resume</button>
    </div>

    <div class="flex flex-row w-full h-3/4">

      <div class=" translate-x-full opacity-0 fixed transition-all duration-300 w-full h-full bg-red-800"
        :class="[{ '!translate-x-0': intro === true }, { '!opacity-100': intro === true }]">
        <Intro></Intro>
      </div>

      <div class=" translate-x-full opacity-0 fixed transition-all duration-500 w-full h-full bg-purple-900"
        :class="[{ '!translate-x-0': tools }, { '!opacity-100': tools }]">
        <Tools></Tools>
      </div>

      <div class=" translate-x-full opacity-0 fixed transition-all duration-500 w-full h-full bg-green-950"
        :class="[{ '!translate-x-0': languages }, { '!opacity-100': languages }]">
        <languages></languages>
      </div>


      <div class=" translate-x-full opacity-0 fixed transition-all duration-500 w-full h-full bg-orange-700"
        :class="[{ '!translate-x-0': specialization }, { '!opacity-100': specialization }]">
        <div class="flex flex-col h-full md:flex-row w-3/3 md:h-full">
          <div class="flex items-center w-full md:w-1/4">
            <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">
              ABOUT
              ME</h1>
          </div>
          <div class="md:w-3/4 flex flex-col gap-5 items-center justify-center text-white">
            <h1 class="text-2xl md:text-4xl font-bold text-white">{{ $t('myname') }}<span class="text-yellow-400"> VOLKAN
                FILAZI</span></h1>
            <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">{{ $t('iamaweb')
            }}
            </h2>
            <div class="flex flex-col gap-5 mt-5 md:justify-center md:flex-row">
              <p class="text-yellow-400">+10 <span class="text-white">asdasd</span></p>
              <p class="text-yellow-400">+2 <span class="text-white">certificate</span></p>
              <p class="text-yellow-400">+3 <span class="text-white">years experience</span></p>
              <p class="text-yellow-400">+3 <span class="text-white">program languages</span></p>
            </div>
          </div>
        </div>
      </div>

     
      <div class=" translate-x-full opacity-0 fixed transition-all duration-500 w-full h-full bg-gray-900"
        :class="[{ '!translate-x-0': resume }, { '!opacity-100': resume }]">
        <div class="flex flex-col h-full md:flex-row w-3/3 md:h-full">
          <div class="flex items-center w-full md:w-1/4">
            <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">
              ABOUT
              ME</h1>
          </div>
          <div class="md:w-3/4 flex flex-col gap-5 items-center justify-center text-white">
            <h1 class="text-2xl md:text-4xl font-bold text-white">{{ $t('myname') }}<span class="text-yellow-400"> VOLKAN
                FILAZI</span></h1>
            <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">{{ $t('iamaweb')
            }}
            </h2>
            <div class="flex flex-col gap-5 mt-5 md:justify-center md:flex-row">
              <p class="text-yellow-400">+10 <span class="text-white">asdasd</span></p>
              <p class="text-yellow-400">+2 <span class="text-white">certificate</span></p>
              <p class="text-yellow-400">+3 <span class="text-white">years experience</span></p>
              <p class="text-yellow-400">+3 <span class="text-white">program languages</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
:disabled {
  opacity: 0.1;
}
</style>
