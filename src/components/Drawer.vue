<script setup lang="ts">
import { ref } from 'vue';
import LeftIntro from '../components/LeftIntro.vue'
import CircleProgress from "vue3-circle-progress";
import { Icon } from '@iconify/vue';


const progressLine = ref(0)
const progressLine2 = ref(0);
const progressLine3 = ref(0)
const progressLine4 = ref(0)
const progressLine5 = ref(0)

function progressAnimationLine() {
  let i = 0;
  const timer = setInterval(() => {
    progressLine.value = i;
    progressLine2.value = (i * 95) / 90;
    progressLine4.value = (i * 95) / 90;
    progressLine5.value = (i * 95) / 90;
    progressLine3.value = (i * 80) / 90;
    i++;
    if (i > 90) {
      clearInterval(timer);
    }
  }, 10);
}


const progressTurkish = ref(0)
const progressEnglish = ref(0)
const progressGerman = ref(0)
const progress = ref(0)
const progress2 = ref(0);
const progress3 = ref(0)



function progressAnimation2() {
  let i = 0;
  const timer = setInterval(() => {
    progressTurkish.value = i;
    progressEnglish.value = (i * 80) / 100;
    progressGerman.value = (i * 70) / 100;
    i++;
    if (i > 100) {
      clearInterval(timer);
    }
  }, 10);
}

const drawerToogle = ref(false)
function drawerFunc() {
  drawerToogle.value = !drawerToogle.value
  if (drawerToogle) {
    progressAnimationLine()
    progressAnimation2()
  } else {
    progressTurkish.value = 0
    progressEnglish.value = 0
    progressGerman.value = 0
    progress.value = 0
    progress2.value = 0
    progress3.value = 0
    progressLine.value = 0
    progressLine2.value = 0
    progressLine3.value = 0
    progressLine4.value = 0
    progressLine5.value = 0
  }

}

</script>
<template>
  <div class="flex z-[120]">
    <div
     @click="drawerFunc()"
      class="w-10 h-10 fixed transition-all flex items-center justify-center cursor-pointer duration-500 rounded-r-md md:mt-[500px] bg-yellow-400 shadow-md"
      :class="{ 'translate-x-[250px] sm:translate-x-[250px] md:translate-x-[500px] transition-all duration-500': drawerToogle }">
      <Icon icon="svg-spinners:gooey-balls-1" color="black"/>
    </div>

    <div
      class="fixed top-0 left-0 flex flex-col z-40 w-64 sm-w-64 md:w-[500px] h-full transition-all duration-500 transform -translate-x-full bg-gray-800 border-r-[1px] text-white shadow-l"
      :class="{ 'translate-x-0': drawerToogle }">
      <div
        class="hidden px-6 py-4 sm:hidden md:flex flex-col z-40 bg-gray-800 text-white border-b-[2px] border-yellow-600 justify-center items-center">
        <h2 class="text-lg font-semibold">Volkan Filazi</h2>
        <p class="text-gray-500">Front-end Web Developer</p>
        <p class="text-gray-500">Android Developer</p>
      </div>

      <div class="w-full mt-0 pr-5 pl-5 md:p-5 md:mt-10 text-white space-y-2">
        <div>
          <h2>Html</h2>
          <div class="shadow w-full bg-white ">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine}%`">
              {{
                progressLine }}</div>
          </div>
        </div>
        <div>
          <h2>Css</h2>
          <div class="shadow w-full bg-white ">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine2}%`">
              {{
                progressLine + 5 }}</div>
          </div>
        </div>
        <div>
          <h2>Vuejs</h2>
          <div class="shadow w-full bg-white">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine3 + 10}%`">
              {{
                progressLine }}</div>
          </div>
        </div>
        <div>
          <h2>Nodejs</h2>
          <div class="shadow w-full bg-white">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine3}%`">
              {{
                progressLine - 10 }}</div>
          </div>
        </div>
        <div>
          <h2>Java</h2>
          <div class="shadow w-full bg-white">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine4 - 20}%`">
              {{
                progressLine - 30 }}</div>
          </div>
        </div>
        <div>
          <h2>Kotlin</h2>
          <div class="shadow w-full bg-white">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-black"
              :style="`width: ${progressLine5 - 20}%`">
              {{
                progressLine - 30 }}</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm-flex-col md:flex-col md:gap-5 p-1 w-full md:justify-between md:p-10">
        <div class="flex flex-col justify-center items-center gap-1">
          <circle-progress background="#0e152f" :percent="progressTurkish" :size="100" :border-width="10"
            :border-bg-width="10" :is-gradient="true" :gradient="{
              startColor: '#facc15',
              stopColor: '#facc15',
            }" />
          <p class="absolute mb-7">{{ progressTurkish }}%</p>
          <p>Turkish</p>
        </div>
        <div class="flex flex-col justify-center items-center gap-1">
          <circle-progress background="#0e152f" :percent="progressEnglish" :size="100" :border-width="10"
            :border-bg-width="10" :is-gradient="true" :gradient="{
              startColor: '#facc15',
              stopColor: '#facc15',
            }" />
          <p class="absolute mb-7">{{ progressEnglish }}%</p>
          <p>English</p>
        </div>
        <div class="flex relative flex-col justify-center items-center gap-1">
          <circle-progress background="#0e152f" :percent="progressGerman" :size="100" :border-width="10"
            :border-bg-width="10" :is-gradient="true" :gradient="{
              startColor: '#facc15',
              stopColor: '#facc15',
            }" />
          <p class="absolute mb-7">{{ progressGerman }}%</p>
          <p>German</p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}
</style>