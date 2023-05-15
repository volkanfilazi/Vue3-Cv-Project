<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import VModal from '../components/V-Modal.vue'

let currentIndexRestaurant = ref(0)


const popupOpenToogle = ref(false)
const selectedImage1 = ref(false)
const selectedImage2 = ref(false)
const selectedImage3 = ref(false)

function prevImageRestaurant() {
  currentIndexRestaurant.value--
  if (currentIndexRestaurant.value < 0) {
    currentIndexRestaurant.value = 2
  }
}

function nextImageRestaurant() {
  currentIndexRestaurant.value++
  if (currentIndexRestaurant.value === 3) {
    currentIndexRestaurant.value = 0
  }
}

function popupOpen() {
    selectedImage1.value = true
    popupOpenToogle.value = true
}

function popupOpen2(){
    selectedImage2.value = true
    popupOpenToogle.value = true
}
function popupOpen3(){
    selectedImage3.value = true
    popupOpenToogle.value = true
}

function popupCloseButton() {
    selectedImage1.value = false
    selectedImage2.value = false
    selectedImage3.value = false
    popupOpenToogle.value = false
}
</script>
<template>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="w-full flex flex-col lg:flex-row h-full lg:w-2/5 items-center gap-2 ">
        <div class="left-0 hidden transform lg:flex justify-center items-center">
          <button @click="prevImageRestaurant"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-left" />
          </button>
        </div>
        <div class="w-full h-[200px] md:h-[300px] lg:h-[260px] lg:w-[500px] relative">
          <Transition>
            <img @click="popupOpen" v-if="currentIndexRestaurant === 0" src="../assets/RestaurantHomepage.png" alt="" class="w-full h-auto absolute">
          </Transition>
          <Transition>
            <img @click="popupOpen2" v-if="currentIndexRestaurant === 1" src="../assets/RestaurantSearch.png" alt="" class="w-full h-auto absolute">
          </Transition>
          <Transition>
            <img @click="popupOpen3" v-if="currentIndexRestaurant === 2" src="../assets/HomepageDrawer.png" alt="" class="w-full h-auto absolute">
          </Transition>
        </div>
        <div class="right-0 hidden transform lg:flex justify-center items-center h-full">
          <button @click="nextImageRestaurant"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-right" />
          </button>
        </div>
        <div class="flex lg:hidden w-full justify-center gap-5">
          <div class="left-0 transform flex justify-center items-center h-full">
            <button @click="prevImageRestaurant"
              class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
              <Icon icon="ic:baseline-keyboard-double-arrow-left" />
            </button>
          </div>
          <div class="right-0 transform flex justify-center items-center h-full">
            <button @click="nextImageRestaurant"
              class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
              <Icon icon="ic:baseline-keyboard-double-arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-full mt-5 sm:mt-[150px] md:mt-0 flex lg:w-2/5 flex-col">
        <div class="w-full flex justify-center mb-5">
          <h1 class="border-[2px] border-yellow-400 font-bold text-yellow-400 p-2 text-center">Restaurant Order</h1>
        </div>
        <p class="text-yellow-400 text-center">Project Thema : <span class="text-white">Menu list, Order drawer, Filter system, Delete an Orderm Search accept more than one keywordm Multi languagesm Accesibility voice and microphone</span></p>
        <p class="text-yellow-400 text-center">Languages and Frameworks : <span class="text-white">Vanillejs, HTML, CSS, Tailwind</span></p>
        <p class="text-yellow-400 text-center">Used Packages : <span class="text-white">@iconify/vue, autoprefixer</span></p>
        <div class="flex justify-center mt-5">
          <button class="border-[2px] relative w-20 h-10 text-center border-yellow-400 text-white">Visit<span
              class="top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full absolute animate-ping"></span></button>
        </div>
      </div>
    </div>

    <VModal :open="popupOpenToogle" @close="popupCloseButton()">
        <template #default>
            <div class="flex justify-center items-center max-w-[1000px]">
                <img v-if="selectedImage1" class=" bg-red-500" src="../assets/RestaurantHomepage.png">
                <img v-if="selectedImage2" class=" bg-red-500" src="../assets/RestaurantSearch.png">
                <img v-if="selectedImage3" class=" bg-red-500" src="../assets/HomepageDrawer.png">
            </div>
        </template>
    </VModal>
</template>