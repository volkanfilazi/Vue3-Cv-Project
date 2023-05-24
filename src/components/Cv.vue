<script setup lang="ts">
import { ref } from 'vue';
import VModal from '../components/V-Modal.vue'
import { Icon } from '@iconify/vue';
import { useStorage } from "@vueuse/core";
import { useNotificationCard } from '../Store/NotificationCard';


let currentIndexCv = ref(0)

const popupOpenToogle = ref(false)
const selectedImage1 = ref(false)
const selectedImage2 = ref(false)
const selectedImage3 = ref(false)
const selectedImage4 = ref(false)
const notificationCard = useNotificationCard()


function prevImageCv() {
  currentIndexCv.value--
  if (currentIndexCv.value < 0) {
    currentIndexCv.value = 3
  }
}

function nextImageCv() {
  currentIndexCv.value++
  if (currentIndexCv.value === 4) {
    currentIndexCv.value = 0
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
function popupOpen4(){
    selectedImage4.value = true
    popupOpenToogle.value = true
}
function popupCloseButton() {
    selectedImage1.value = false
    selectedImage2.value = false
    selectedImage3.value = false
    selectedImage4.value = false
    popupOpenToogle.value = false
}
</script>
<template>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="w-full mt-5 sm:mt-[150px] md:mt-0 order-1 md:order-none lg:w-2/5 flex flex-col">
        <div class="w-full flex justify-center mb-5">
          <h1 class="border-[2px] border-yellow-400 font-bold text-yellow-400 p-2 text-center">First Cv Volkan Filazi</h1>
        </div>
        <p class="text-yellow-400 text-center">Project Thema : <span class="text-white">Cv Page, Responsive, Like images and save them local, Contact, Filter Portfolio</span></p>
        <p class="text-yellow-400 text-center">Languages and Frameworks : <span class="text-white">Vanillejs, HTML,
            Components, CSS,Tailwind</span></p>
        <p class="text-yellow-400 text-center">Used Packages : <span class="text-white">axios, iconify/vue,
            @vitejs/plugin-vue, autoprefixer</span></p>
        <div class="flex justify-center mt-5">
          <button @click="notificationCard.visitButtonErrorAnimation()" class="border-[2px] relative w-20 h-10 text-center border-yellow-400 text-white">Visit<span
              class="top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full absolute animate-ping"></span></button>
        </div>
      </div>

      <div class="w-full flex flex-col lg:flex-row h-full lg:w-2/5 items-center gap-2 ">
        <div class="left-0 hidden transform lg:flex justify-center items-center">
          <button @click="prevImageCv"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-left" />
          </button>
        </div>
        <div class="image-hover w-full h-[200px] md:h-[300px] lg:h-[260px] lg:w-[500px] relative">
          <Transition>
            <img @click="popupOpen" v-if="currentIndexCv === 0" src="../assets/CvEdu.png" alt="" class="w-full h-auto absolute">
          </Transition>
          <Transition>
            <img @click="popupOpen2" v-if="currentIndexCv === 1" src="../assets/CvProfile.png" alt="" class="w-full h-auto absolute">
          </Transition>
          <Transition>
            <img @click="popupOpen3" v-if="currentIndexCv === 2" src="../assets/CvProjects.png" alt="" class="w-full h-auto absolute">
          </Transition>
          <Transition>
            <img @click="popupOpen4" v-if="currentIndexCv === 3" src="../assets/CvSkills.png" alt="" class="w-full h-auto absolute">
          </Transition>
        </div>
        <div class="right-0 hidden transform lg:flex justify-center items-center h-full">
          <button @click="nextImageCv"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-right" />
          </button>
        </div>
        <div class="flex lg:hidden w-full justify-center gap-5">
          <div class="left-0 transform flex justify-center items-center h-full">
            <button @click="prevImageCv"
              class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
              <Icon icon="ic:baseline-keyboard-double-arrow-left" />
            </button>
          </div>
          <div class="right-0 transform flex justify-center items-center h-full">
            <button @click="nextImageCv"
              class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
              <Icon icon="ic:baseline-keyboard-double-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <VModal :open="popupOpenToogle" @close="popupCloseButton()">
        <template #default>
            <div class="flex justify-center items-center max-w-[1000px]">
                <img v-if="selectedImage1" class=" bg-red-500" src="../assets/CvEdu.png">
                <img v-if="selectedImage2" class=" bg-red-500" src="../assets/CvProfile.png">
                <img v-if="selectedImage3" class=" bg-red-500" src="../assets/CvProjects.png">
                <img v-if="selectedImage4" class=" bg-red-500" src="../assets/CvSkills.png">
            </div>
        </template>
    </VModal>
</template>

<style scoped>
button:hover {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}
.image-hover {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}
</style>