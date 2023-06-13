<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntelligenceStore } from '../Store/Intelligence';
import { Icon } from '@iconify/vue';
import VPopup from './V-Modal/V-Popup.vue';
import { useRouter } from "vue-router";

const router = useRouter()
const intelligenceStore = useIntelligenceStore()
const popupToogle = ref<boolean>(false)
const categoryStartingCountDown = ref<number>(10)
const interval = ref(null)

intelligenceStore.dataCopy = intelligenceStore.mainData


function popupCloseButton() {
  categoryStartingCountDown.value = 10
  popupToogle.value = false
  clearInterval(interval.value);
}

function selectedCategory(name: string) {
  popupToogle.value = true
  const response = intelligenceStore.dataCopy.filter((item) => item.category === name)
  intelligenceStore.dataCopy = response
  timeCounter()
}

function clearTime(){
  categoryStartingCountDown.value = 0
  clearInterval(interval)
}
function timeCounter() {
  interval.value = setInterval(() => {
    categoryStartingCountDown.value--;
    if (categoryStartingCountDown.value < 0) {
      categoryStartingCountDown.value = 0
      router.push({ name: 'intelligenceGameArea' })
      popupToogle.value = false
      clearInterval(interval.value);
      categoryStartingCountDown.value = 10
    }
  }, 1000);
}

onMounted(() => {
  categoryStartingCountDown.value = 10;
});
</script>

<template>
  <div class="h-full p-2 md:p-0 w-full justify-center flex flex-col">
    <div class="flex justify-center">
      <h1 class="text-center bg-white p-2 rounded-lg">{{ $t('choose') }}</h1>
    </div>
    <div class="items-center mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <div class="grid grid-cols-1 h-[380px]">
      <p class="text-center">{{ $t('beforeInfoOne') }}</p>
      <p class="text-center">{{ $t('beforeInfoTwo') }}</p>
      <div class="grid grid-cols-2 ">
        <div class="flex flex-col items-center gap-2">
          <div class="bg-red-500 text-center rounded-full p-2 w-10 h-10">J</div>
          <p>{{ $t('beforeInfoThree') }}</p>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="bg-red-500 rounded-full text-center p-2 w-10 h-10">5</div>
          <p>{{ $t('beforeInfoFour') }}</p>
        </div>
      </div>
      <h1 class="text-center font-bold">{{ $t('gameStart') }}</h1>
      <div class="flex items-center justify-center">
        <p class="border-[2px] w-14 h-14 border-red-500 text-center rounded-full flex items-center justify-center">
          <span>{{ categoryStartingCountDown }}</span>
        </p>
      </div>
      <div @click="clearTime" class="flex items-center cursor-pointer text-white hover:opacity-80 transition-all duration-300 justify-center bg-red-500">
        <p class="text-center">{{ $t('clickToStart') }}</p>
      </div>
    </div>
  </VPopup>
</template>