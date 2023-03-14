<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const emailToogle = ref(false)
const phoneToogle = ref(false)

function emailOpen() {
  emailToogle.value = !emailToogle.value
}
function phoneOpen() {
  phoneToogle.value = !phoneToogle.value
}
</script>
<template>
  <div
    class="flex relative flex-col h-full mt-10 sm:mt-10 md:mt-0 sm:flex-col md:h-screen md:z-10 md:flex-row md:justify-center md:items-center">
    <div
      class="flex flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
      
      <h1 class="text-3xl font-bold text-white">MY NAME IS <span class="text-yellow-500">VOLKAN
          FILAZI</span></h1>
      <h2 class="text-center sm:text-center md:text-start font-bold text-white">IAM A WEB DESIGNER and ANDROID DEVELOPER
      </h2>
      <div class="flex flex-col sm:flex-col md:flex-row text-yellow-400 gap-3">
        <p>+10 projects</p>
        <p>+2 certificate</p>
        <p>+3 years experience</p>
        <p>+3 program languages</p>
      </div>
      <p class="text-white">Fallow Me</p>
      <div class="flex gap-5">
        <a class="w-10 h-10 flex cursor-pointer justify-center items-center bg-white rounded-full hover:bg-orange-600"
          href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
          <Icon icon="ri:linkedin-fill" color="black" />
        </a>
        <a class="w-10 h-10 flex cursor-pointer justify-center items-center bg-white rounded-full hover:bg-orange-600"
          href="https://github.com/volkanfilazi">
          <Icon icon="ph:github-logo-fill" color="black" />
        </a>
        <a class="w-10 h-10 flex cursor-pointer justify-center items-center bg-white rounded-full hover:bg-orange-600"
          href="https://www.facebook.com/profile.php?id=850434189">
          <Icon icon="ic:outline-facebook" color="black" />

        </a>

      </div>
    </div>
    <div class="flex flex-col gap-2 absolute top-0 right-0 md:mr-20 mt-40">
      <div class="flex justify-end items-center gap-2">
        <Transition>
          <div v-if="emailToogle"
            class="w-50 h-10 flex justify-center items-center p-2 text-black font-bold text-center bg-white">
            <p>volkanfilazi@hotmail.com</p>
          </div>
        </Transition>
        <div @click="emailOpen()"
          class="w-12 h-12 sm:w-12 sm:h-12 md:w-20 md:h-20 cursor-pointer flex justify-center items-center  bg-white rounded-full"
          :class="{ 'bg-yellow-400 transition-all duration-500': emailToogle }">
          <Icon class="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] " icon="ic:round-email"
            color="black" width="36" height="36" />
        </div>
      </div>
      <div class="flex justify-end items-center gap-2">
        <Transition>
          <div v-if="phoneToogle"
            class="w-50 h-10 flex justify-center items-center p-2 text-black font-bold text-center bg-white">
            <p>+4368181287010</p>
          </div>
        </Transition>
        <div @click="phoneOpen()"
          class="w-12 h-12 sm:w-12 sm:h-12 md:w-20 md:h-20 cursor-pointer flex justify-center items-center  bg-white rounded-full"
          :class="{ 'bg-yellow-400 transition-all duration-500': phoneToogle }">
          <Icon class="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px]"
            icon="material-symbols:phone-android" color="black" width="36" height="36" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>