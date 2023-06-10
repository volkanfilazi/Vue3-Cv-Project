<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
import Work from '../components/Work.vue'
import Hobbies from '../components/Hobbies.vue'
import { useStorage } from "@vueuse/core";

const showWeb = ref(true)
const showApp = ref(false)
const showEdu = ref(false)
const showWork = ref(false)

function showWebDesign() {
  showApp.value = false
  showEdu.value = false
  showWork.value = false
  setTimeout(() => {
    showWeb.value = true
  }, 500)
}
function showApplication() {
  showWeb.value = false
  showEdu.value = false
  showWork.value = false
  setTimeout(() => {
    showApp.value = true
  }, 500)
}
function showEducation() {
  showApp.value = false
  showWeb.value = false
  showWork.value = false
  setTimeout(() => {
    showEdu.value = true
  }, 500)
}
function showWorking() {
  showApp.value = false
  showEdu.value = false
  showWeb.value = false
  setTimeout(() => {
    showWork.value = true
  }, 500)
}
</script>
<template>
  <div class="flex flex-col mt-10 md:mt-0 w-full justify-center items-center">
    <div class="w-[100px] md:w-[200px] flex justify-end">
      <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
    </div>
    <h1 class="text-white font-bold text-[20px] md:text-[30px]">Career</h1>
    <div class="w-[100px] md:w-[200px] flex justify-start">
      <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
    </div>
  </div>
  <div id="career"
    class="skills observed-sections mt-5 flex flex-col md:mt-0 justify-between h-full sm:h-full mb-10 md:w-4/4 sm:flex-col md:flex-row w-full md:justify-center md:items-center z-10">
    <div class="flex flex-row justify-center sm:justify-center sm:flex-row md:justify-start md:flex-col">
      <button @click="showWebDesign()"
        class="flex cursor-pointer flex-col group h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent  bg-gray-900 md:h-[150px] md:w-[150px] transition-all duration-500"
        :class="{ 'transition-all duration-500 bg-black border-[1px] border-yellow-400': showWeb }">
        <h2 class="text-white hidden sm:hidden md:flex group-hover:text-yellow-400 transition-all duration-300">Skills</h2>
        <div class="flex gap-1 h-2/3 w-full items-center justify-center">
          <div class="flex items-center">
            <Icon class="hidden sm:hidden group-hover:text-yellow-400 text-white transition-all duration-300 md:flex" icon="iconoir:design-nib" width="25" height="25" />
            <Icon class="group-hover:text-yellow-400 text-white transition-all duration-300" icon="icon-park-outline:code-computer" width="50" height="50" />
            <Icon class="hidden sm:hidden md:flex group-hover:text-yellow-400 text-white transition-all duration-300" icon="fluent:design-ideas-20-filled" width="25"
              height="25" />
          </div>
        </div>
      </button>
      <button @click="showApplication()"
        class="flex cursor-pointer flex-col border-b-[1px] group h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent bg-gray-900 md:h-[150px] md:w-[150px] transition-all duration-500"
        :class="{ 'transition-all duration-500 bg-black border-yellow-400': showApp }">
        <h2 class="text-white hidden sm:hidden group-hover:text-yellow-400 transition-all duration-300 md:flex">Education</h2>
        <div class="flex gap-1 h-2/3 w-full items-center justify-center">
          <div class="flex items-center">
            <Icon class="group-hover:text-yellow-400 text-white transition-all duration-300" icon="zondicons:education" width="50" height="50" />
          </div>
        </div>
      </button>
      <button @click="showEducation()"
        class="flex cursor-pointer flex-col border-b-[1px] h-[60px] w-[60px] sm:h-[60px] group sm:w-[60px] justify-center items-center border-[1px] border-transparent bg-gray-900 md:h-[150px] md:w-[150px] transition-all duration-500"
        :class="{ 'transition-all duration-500 bg-black border-yellow-400': showEdu }">
        <h2 class="text-white hidden sm:hidden group-hover:text-yellow-400 transition-all duration-300 md:flex">Work</h2>
        <div class="flex gap-1 h-2/3 w-full items-center justify-center">
          <div class="flex items-center">
            <Icon class="group-hover:text-yellow-400 text-white transition-all duration-300" icon="ic:round-work-history" width="50" height="50" />
          </div>
        </div>
      </button>
      <button @click="showWorking()"
        class="flex cursor-pointer flex-col h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] group justify-center items-center border-[1px] border-transparent bg-gray-900 md:h-[150px] md:w-[150px] transition-all duration-500"
        :class="{ 'transition-all duration-500 bg-black border-yellow-400': showWork }">
        <h2 class="text-white hidden sm:hidden md:flex group-hover:text-yellow-400 transition-all duration-300">Hobbies</h2>
        <div class="flex gap-1 h-2/3 w-full items-center justify-center">
          <div class="flex items-center">
            <Icon class="group-hover:text-yellow-400 text-white transition-all duration-300" icon="bi:emoji-smile-fill" width="50" height="50" />
          </div>
        </div>
      </button>
    </div>
    <div class="flex z-20 md:w-3/4 w-full">
      <Transition>
        <div class=" opacity-90 w-full h-full md:h-[70%]" v-if="showWeb">
          <Skills></Skills>
        </div>
      </Transition>
      <Transition>
        <div class="w-full h-full md:h-[70%]" v-if="showApp">
          <Education></Education>
        </div>
      </Transition>
      <Transition>
        <div class="w-full h-full md:h-[70%]" v-if="showEdu">
          <Work></Work>
        </div>
      </Transition>
      <Transition>
        <div class="w-full h-full md:h-[70%]" v-if="showWork">
          <Hobbies></Hobbies>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>


/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>