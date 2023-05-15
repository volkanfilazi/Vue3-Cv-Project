<script setup lang="ts">
import BookingSystem from '../components/BookingSystem.vue'
import Sumsi from '../components/Sumsi.vue'
import Restaurant from '../components/Restaurant.vue'
import Cv from '../components/Cv.vue'


</script>
<template>
  <div id="projects" class="flex flex-col p-5 justify-center items-center">
    <div class="w-[150px] flex justify-end">
      <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
    </div>
    <h1 id="projects" class="text-white font-bold text-[30px]">Projects</h1>
    <div class="w-[150px] flex justify-start">
      <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
    </div>
  </div>

  <div id="portfolio" class="w-full md:p-20 flex flex-col gap-20 justify-center">
    <BookingSystem></BookingSystem>
    <Sumsi></Sumsi>
    <Restaurant></Restaurant>
    <Cv></Cv>
  </div>
</template>

<style scoped>

</style>