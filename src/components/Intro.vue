<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, watchEffect } from 'vue';
import { useScroll, watchDebounced } from '@vueuse/core'



const projects = ref(0)
const certificate = ref(0)
const experience = ref(0)
const languages = ref(0)

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


const introToogleOne = ref(true)
const introToogleTwo = ref(false)
const introToogleThree = ref(false)

function introTwoShowing() {
  introToogleOne.value = false
  introToogleTwo.value = true
  introToogleThree.value = false
}

function introGoBack() {
  introToogleTwo.value = false
  introToogleOne.value = true
  introToogleThree.value = false
}

function introWhoAmI() {
  introToogleThree.value = true
  introToogleTwo.value = false
  introToogleOne.value = false
}
const socialCheck = ref<boolean>(false)


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

watchEffect(() => {
  console.log("alo", currentIndex.value)
})

</script>
<template>
  <div id="intro"
    class="flex relative flex-col sm:mt-20 md:mt-0 sm:flex-col md:h-full md:z-10 md:flex-row md:justify-center md:items-center">
    <div
      class="text-white fixed right-0 hidden md:flex flex-col justify-between items-center bg-gray-800 h-1/3 w-12 mr-5 border-[1px] text-xl rounded-full p-4 shadow-md shadow-black">
      <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 0 }" icon="mdi:home-outline" width="24"
        height="24" />
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 1 }" icon="et:tools-2" width="24"
          height="24" />
          <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 2 }" icon="material-symbols:language" width="24"
          height="24" />
          <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 3 }"
            icon="material-symbols:group-work-outline" width="24" height="24" />
      <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 4 }" icon="game-icons:skills"
        width="24" height="24" />
    </div>
    <div class="observed-sections w-full flex mt-14 md:mt-0 md:h-screen justify-center items-center">
        <div
          class="flex text-white flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
          <div
            class="border-[1px] text-sm md:text-md w-full sm:w-[300px] md:w-[500px] border-white rounded-xl font-bold flex justify-center items-center h-[100px]">
            <p class="text-yellow-400 md:text-lg font-bold">&lt;code&gt;</p>
            <p class="text-white">{{ displayText }}<span class=" text-yellow-400 animate-ping">|</span></p>
            <p class="text-yellow-400 md:text-lg font-bold">&lt;/code&gt;</p>
          </div>
          <h1 class="text-2xl md:text-4xl font-bold text-white">MY NAME IS <span class="text-yellow-400">VOLKAN
              FILAZI</span></h1>
          <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">IAM A WEB and
            ANDROID DEVELOPER
          </h2>
          <div class="flex flex-col sm:flex-col md:flex-row text-white gap-3">
            <p><span class="text-yellow-400">+{{ projects }}</span> projects</p>
            <p><span class="text-yellow-400">+{{ certificate }}</span> certificate</p>
            <p><span class="text-yellow-400">+{{ experience }}</span> years experience</p>
            <p><span class="text-yellow-400">+{{ languages }}</span> program languages</p>
          </div>
          <button @click="introTwoShowing()"
            class="text-yellow-400 hover:text-white hover:transition-all hover:duration-500 top-0 mt-20">Do you need more
            info?</button>
          <div class="flex gap-5 p-2 transition-all duration-500">
            <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
              href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
              <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" icon="ri:linkedin-fill"
                width="36" height="36" />
            </a>
            <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
              href="https://www.facebook.com/">
              <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                icon="ic:outline-facebook" width="36" height="36" />
            </a>
            <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
              href="https://github.com/volkanfilazi">
              <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                icon="ph:github-logo-fill" width="36" height="36" />
            </a>
            <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
              href="https://www.npmjs.com/~volkanfilazi">
              <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" icon="tabler:brand-npm"
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
}
</style>
