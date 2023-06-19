<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import { useStorage } from '@vueuse/core'
import { useIntroSocialMedia } from '../Store/IntroSocialMedia.store';
import { useIntroAnimationStore } from '../Store/IntroAnimations.store';
import RightNavigation from './RightNavigation.vue';

const animationStore = useIntroAnimationStore()
const IntroSocialMedia = useIntroSocialMedia()
const darkmode = useStorage("cvDarkmode", Boolean)
const circles = useStorage("circles", Number)
const displayText = ref<any>('')

onMounted(() => {
  if (!circles.value) {
    circles.value = 0
  }
})

animationStore.progressAnimation()
animationStore.introAnimation(displayText)

</script>
<template>
  <div
    class="flex relative flex-col sm:mt-20 md:mt-0 sm:flex-col md:h-full md:z-10 md:flex-row md:justify-center md:items-center">
    <RightNavigation></RightNavigation>
    <div class="observed-sections w-full flex gap-5 flex-col mt-14 md:mt-0 md:h-screen justify-center items-center">
      <div class="flex flex-col mt-10 md:mt-0 w-full justify-center items-center">
        <h1 class="text-white font-bold text-[20px] md:text-[30px]" :style="{ color: darkmode ? 'black' : 'white' }">{{
          $t('intro') }}</h1>
      </div>
      <div
        class="flex text-white mt-5 flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
        <div
          class="border-[1px] text-sm md:text-md w-full sm:w-full md:w-[500px] border-white rounded-xl font-bold flex justify-center items-center h-[100px]"
          :style="{ borderColor: darkmode ? 'black' : 'white' }">
          <p class="text-yellow-400 md:text-lg font-bold" :style="{ color: darkmode ? 'red' : '' }">&lt;code&gt;</p>
          <p class="text-white md:text-lg font-bold" :style="{ color: darkmode ? 'black' : 'white' }">{{ displayText
          }}<span class=" text-yellow-400 animate-ping">|</span></p>
          <p class="text-yellow-400 md:text-lg font-bold" :style="{ color: darkmode ? 'red' : '' }">&lt;/code&gt;</p>
        </div>
        <h1 class="text-2xl md:text-4xl font-bold text-white" :style="{ color: darkmode ? 'black' : '' }">{{ $t('myname')
        }}<span class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }"> VOLKAN
            FILAZI</span></h1>
        <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white"
          :style="{ color: darkmode ? 'black' : '' }">{{ $t('iamaweb') }}
        </h2>
        <div class="flex flex-col sm:flex-col md:flex-row text-white gap-3" :style="{ color: darkmode ? 'black' : '' }">
          <p><span class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">+{{ animationStore.projects }}</span>
            {{ $t('projects') }}</p>
          <p><span class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">+{{ animationStore.certificate
          }}</span> {{ $t('certificate') }}</p>
          <p><span class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">+{{ animationStore.experience
          }}</span> {{ $t('yearsexperience') }}</p>
          <p><span class="text-yellow-400" :style="{ color: darkmode ? 'red' : '' }">+{{ animationStore.languages }}</span>
            {{ $t('programlanguages') }}</p>
        </div>
        <div class="flex gap-5 p-2 transition-all duration-500">
          <div v-for="social in IntroSocialMedia.socialMediElements">
            <a class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
              :class="({ 'hover:!border-red-600': darkmode })" :href="social.link">
              <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                :class="({ 'group-hover:!text-red-600': darkmode })" :icon="social.icon" width="36" height="36" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
