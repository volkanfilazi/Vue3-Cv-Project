<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useIntelligenceStore } from '../Store/Intelligence';
import { Icon } from '@iconify/vue';
import VPopup from './V-Modal/V-Popup.vue';
import { useRouter } from "vue-router";

const router = useRouter()
const intelligenceStore = useIntelligenceStore()
const popupToogle = ref<boolean>(false)
const startingCountDown = ref<number>(3)


intelligenceStore.dataCopy = intelligenceStore.mainData


function popupCloseButton() {
  popupToogle.value = false
}

function selectedCategory(name: string) {
  popupToogle.value = true
  const response = intelligenceStore.dataCopy.filter((item) => item.category === name)
  intelligenceStore.dataCopy = response
  timeCounter()
}


function timeCounter() {
  const interval = setInterval(() => {
    startingCountDown.value--;
    if (startingCountDown.value < 0) {
      startingCountDown.value = 0
      router.push({ name: 'intelligenceGameArea' })
      popupToogle.value = false
      clearInterval(interval);
    }
  }, 1000);
}

</script>

<template>
  <div class="h-full p-2 md:p-0 w-full justify-center flex flex-col">
    <h1 class="text-center">Choose A Category</h1>
    <div class="items-center mt-10 grid grid-cols-2 gap-5 md:gap-10">
      <div v-for="item in intelligenceStore.categories" class="flex items-center justify-center">
        <div @click="selectedCategory(item.category)"
          class="w-[200px] h-[200px] cursor-pointer transition-all duration-500 hover:shadow-sm hover:shadow-gray-600 bg-white flex items-center justify-center flex-col">
          <p class="">{{ item.category }}</p>
          <Icon class="text-red-400" :icon="item.image" width="48" height="48" />
        </div>
      </div>
    </div>
  </div>
  <VPopup :open="popupToogle" @close="popupCloseButton()">
    <div class="grid grid-cols-1 h-[300px]">
      <p class="text-center">Just answer the questions</p>
      <h1 class="text-center font-bold">Game is starting</h1>
      <div class="flex items-center justify-center">
        <p class="border-[1px] w-10 h-10 border-black text-center rounded-full flex items-center justify-center">
          <span>{{ startingCountDown }}</span>
        </p>
      </div>
    </div>
  </VPopup>
</template>