<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
const router = useRouter()

const darkModeOn = useStorage('darkmode',Boolean)
function rotateToCategoryPage(){
  router.push({ name: 'intelligenceCategory'})
}
</script>

<template>
  <div class="h-full justify-center items-center gap-5 flex flex-col">
    <div class="border-[1px] bg-red-600 p-2 text-white font-bold rounded-md" :style="{backgroundColor : darkModeOn ? 'transparent' : ''}">
      <p> {{ $t('homeMessage') }}</p>
      <p class="text-center">{{ $t('homeMessageSecond') }}</p>
    </div>
    <div>
      <button @click="rotateToCategoryPage" class="text-center text-white font-bold border-[2px] w-[150px] transition-all duration-300 h-[50px] bg-red-500 hover:bg-red-600 rounded-lg">Start</button>
    </div>
  </div>
</template>