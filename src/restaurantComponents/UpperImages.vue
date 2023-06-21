<script setup lang="ts">
import { useShopStore } from '../Store/Shop';

  const shopStore = useShopStore()
</script>

<template>
  <div class="w-full lg:w-5/6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 bg-orange-500">
    <div v-for="(images,index) in shopStore.upperImagesArray" class=" h-[270px] relative text-white items-center flex justify-center gap-5 cursor-pointer">
      <div v-bind:style="{ 'background-image': 'url(' + images.url + ')' }" class="bg-auto relative lg:bg-no-repeat bg-center h-full w-full">
        <div class="absolute text-red-800 p-10 space-y-4">
          <div class="text-2xl">{{ images.title }}</div>
          <div class="text-2x1">{{ images.secondTitle }}</div>
          <button
            class="border-[1px] hover:border-purple-600 p-2 transition-all duration-300 hover:text-purple-600">DISCOVER</button>
        </div>
      </div>
    </div>
  </div>
</template>