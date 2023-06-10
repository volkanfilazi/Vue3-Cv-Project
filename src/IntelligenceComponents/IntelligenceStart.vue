<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()

function rotateToCategoryPage(){
  router.push({ name: 'intelligenceCategory'})
}
</script>

<template>
  <div class="h-full justify-center items-center gap-5 flex flex-col">
    <div class="border-[1px] bg-gray-500 p-2 text-white font-bold rounded-md">
      <p>Answer certain categories of questions and discover your intelligence</p>
      <p class="text-center">If you are ready go ahead</p>
    </div>
    <div>
      <button @click="rotateToCategoryPage" class="text-center text-white font-bold border-[2px] w-[150px] transition-all duration-300 h-[50px] bg-red-500 hover:bg-red-600 rounded-lg">Start</button>
    </div>
  </div>
</template>