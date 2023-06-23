<script setup lang="ts">
import { useIntroSocialMedia } from '../Store/IntroSocialMedia.store';
import { Icon } from '@iconify/vue';

const IntroSocialMedia = useIntroSocialMedia()
</script>

<template>
  <div class=" translate-x-0 fixed transition-all duration-300 w-full h-full bg-red-800">
    <div class="flex flex-col h-full md:flex-row w-3/3 md:h-full">
      <div class="flex items-center w-full md:w-1/4">
        <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">ABOUT
          ME</h1>
      </div>
      <div class="md:w-3/4 flex flex-col gap-5 items-center justify-center text-white">
        <h1 class="text-2xl md:text-4xl font-bold text-white">{{ $t('myname') }}<span class="text-yellow-400"> VOLKAN
            FILAZI</span></h1>
        <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">{{ $t('iamaweb') }}
        </h2>
        <div class="flex flex-col gap-5 mt-5 md:justify-center md:flex-row">
          <p class="text-yellow-400">+10 <span class="text-white">projects</span></p>
          <p class="text-yellow-400">+2 <span class="text-white">certificate</span></p>
          <p class="text-yellow-400">+3 <span class="text-white">years experience</span></p>
          <p class="text-yellow-400">+3 <span class="text-white">program languages</span></p>
        </div>
        <div class="flex gap-5 p-2 transition-all duration-500 justify-center items-center">
          <div v-for="social in IntroSocialMedia.socialMediElements">
            <a
              class="w-16 h-16 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-400 rounded-full hover:border-yellow-400">
              <Icon class="text-gray-400 group-hover:text-yellow-400 transition-all duration-500" :icon="social.icon"
                width="36" height="36" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>