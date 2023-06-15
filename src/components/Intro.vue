<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, watchEffect } from 'vue';
import { useScroll, useStorage, watchDebounced } from '@vueuse/core'

const projects = ref(0)
const certificate = ref(0)
const experience = ref(0)
const languages = ref(0)
const darkmode = useStorage("darkmode", Boolean)
const test = ref<any>('Creative, patient and innovative')
const displayText = ref<any>('')

function progressAnimation() {
  let i = 0;
  const timer = setInterval(() => {
    projects.value = i;
    certificate.value = (i * 2) / 10;
    experience.value = (i * 3) / 10;
    languages.value = (i * 3) / 10;

    i++;
    if (i > 10) {
      clearInterval(timer);
    }
  }, 40);
}

function alo() {
  let i = 0;
  let lastIndex = 3;
  const timer = setInterval(() => {
    if (i < test.value.length) {
      displayText.value = test.value.substring(0, i + 1);
      lastIndex = i;
    } else if (lastIndex > 0) {
      displayText.value = test.value.substring(0, lastIndex);
      lastIndex--;
    } else {
      displayText.value = '';
      i = 0;
      lastIndex = 0;
    }
    i++;
  }, 200);
}

progressAnimation()
alo()

const sections = ref()

const { y, directions, isScrolling } = useScroll(window)

watchEffect(() => {
  if (y.value !== -1)
    sections.value = Array.prototype.slice.call(document?.querySelectorAll('body .observed-sections'))
})

const currentIndex = ref(0)

watchDebounced(y, () => {
  if (y.value >= 0 && sections.value?.length) {
    currentIndex.value = sections.value.findIndex((e) => {
      const clientRect = e.getBoundingClientRect()
      return clientRect.top >= 0
    })
  }
}, { debounce: 50, maxWait: 100 })


</script>
<template>
  <div id="intro"
    class="flex relative flex-col sm:mt-20 md:mt-0 sm:flex-col md:h-full md:z-10 md:flex-row md:justify-center md:items-center">
    <div
      class="text-white fixed right-0 hidden md:flex flex-col justify-between items-center bg-gray-800 h-1/3 w-12 mr-5 border-[1px] text-xl rounded-full p-4 shadow-md shadow-black" 
      :style="{backgroundColor : darkmode ? 'red' : ''}">
      <a href="#intro">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 0 }" icon="mdi:home-outline"
          width="24" height="24" />
      </a>
      <a href="#tools">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 1 }" icon="et:tools-2" width="24"
          height="24" />
      </a>
      <a href="#languages">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 2 }" icon="material-symbols:language"
          width="24" height="24" />
      </a>
      <a href="#specialization">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 3 }"
          icon="material-symbols:group-work-outline" width="24" height="24" />
      </a>
      <a href="#myresume">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 4 }" icon="game-icons:skills"
          width="24" height="24" />
      </a>
    </div>
    <div class="observed-sections w-full flex gap-5 flex-col mt-14 md:mt-0 md:h-screen justify-center items-center">
      <div class="flex flex-col mt-10 md:mt-0 w-full justify-center items-center">
        <h1 class="text-white font-bold text-[20px] md:text-[30px]" :style="{color : darkmode ? 'black' : 'white'}">Intro</h1>
      </div>
      <div class="flex gap-2">
        <div class="w-4 h-4 rounded-full bg-yellow-400" :style="{backgroundColor : darkmode ? 'red' : ''}"></div>
        <div class="w-4 h-4 rounded-full bg-gray-500"></div>
        <div class="w-4 h-4 rounded-full bg-gray-500"></div>
        <div class="w-4 h-4 rounded-full bg-gray-500"></div>
        <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      </div>
      <div
        class="flex text-white mt-5 flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
        <div
          class="border-[1px] text-sm md:text-md w-full sm:w-full md:w-[500px] border-white rounded-xl font-bold flex justify-center items-center h-[100px]" :style="{borderColor : darkmode ? 'black' : 'white'}">
          <p class="text-yellow-400 md:text-lg font-bold" :style="{color : darkmode ? 'red' : ''}">&lt;code&gt;</p>
          <p class="text-white md:text-lg font-bold" :style="{color : darkmode ? 'black' : 'white'}">{{ displayText }}<span class=" text-yellow-400 animate-ping">|</span></p>
          <p class="text-yellow-400 md:text-lg font-bold" :style="{color : darkmode ? 'red' : ''}">&lt;/code&gt;</p>
        </div>
        <h1 class="text-2xl md:text-4xl font-bold text-white" :style="{color : darkmode ? 'black' : ''}">MY NAME IS <span class="text-yellow-400" :style="{color : darkmode ? 'red' : ''}">VOLKAN
            FILAZI</span></h1>
        <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white" :style="{color : darkmode ? 'black' : ''}">IAM A WEB and
          ANDROID DEVELOPER
        </h2>
        <div class="flex flex-col sm:flex-col md:flex-row text-white gap-3" :style="{color : darkmode ? 'black' : ''}">
          <p><span class="text-yellow-400" :style="{color : darkmode ? 'red' : ''}">+{{ projects }}</span> projects</p>
          <p><span class="text-yellow-400" :style="{color : darkmode ? 'red' : ''}">+{{ certificate }}</span> certificate</p>
          <p><span class="text-yellow-400" :style="{color : darkmode ? 'red' : ''}">+{{ experience }}</span> years experience</p>
          <p><span class="text-yellow-400" :style="{color : darkmode ? 'red' : ''}">+{{ languages }}</span> program languages</p>
        </div>
        <div class="flex gap-5 p-2 transition-all duration-500">
          <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
          :class="({'hover:border-red-600' : darkmode})"
            href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
            <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" :class="({'group-hover:text-red-600' : darkmode})" icon="ri:linkedin-fill"
              width="36" height="36" />
          </a>
          <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
          :class="({'hover:border-red-600' : darkmode})"
            href="https://www.facebook.com/">
            <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" :class="({'group-hover:text-red-600' : darkmode})" icon="ic:outline-facebook"
              width="36" height="36" />
          </a>
          <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
          :class="({'hover:border-red-600' : darkmode})"
            href="https://github.com/volkanfilazi">
            <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" :class="({'group-hover:text-red-600' : darkmode})" icon="ph:github-logo-fill"
              width="36" height="36" />
          </a>
          <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
          :class="({'hover:border-red-600' : darkmode})"
            href="https://www.npmjs.com/~volkanfilazi">
            <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" :class="({'group-hover:text-red-600' : darkmode})" icon="tabler:brand-npm"
              width="36" height="36" />
          </a>
        </div>
      </div>
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

div[role="progressbar"] {
  --size: 12rem;
  --fg: rgb(250, 204, 21);
  --bg: rgb(255, 255, 255);
  --pgPercentage: var(--value);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(closest-side, rgb(31, 41, 55) 80%, transparent 0 99.9%, white 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}</style>
