<script setup lang="ts">
import { ref } from 'vue';
import VModal from '../components/V-Modal.vue'
import { Icon } from '@iconify/vue';
import { useStorage } from "@vueuse/core";
import { useNotificationCard } from '../Store/NotificationCard';




const popupOpenToogle = ref(false)
const selectedImage1 = ref(false)
const selectedImage2 = ref(false)
const selectedImage3 = ref(false)
const selectedImage4 = ref(false)
const selectedImage5 = ref(false)
let currentIndexBooking = ref(0)
const notificationCard = useNotificationCard()


function popupOpen() {
  selectedImage1.value = true
  popupOpenToogle.value = true
}

function popupOpen2() {
  selectedImage2.value = true
  popupOpenToogle.value = true
}

function popupOpen3() {
  selectedImage3.value = true
  popupOpenToogle.value = true
}

function popupOpen4() {
  selectedImage4.value = true
  popupOpenToogle.value = true
}

function popupOpen5() {
  selectedImage5.value = true
  popupOpenToogle.value = true
}

function popupCloseButton() {
  selectedImage1.value = false
  selectedImage2.value = false
  selectedImage3.value = false
  selectedImage4.value = false
  selectedImage5.value = false
  popupOpenToogle.value = false
}

function prevImageBooking() {
  currentIndexBooking.value--
  if (currentIndexBooking.value < 0) {
    currentIndexBooking.value = 4
  }
}

function nextImageBooking() {
  currentIndexBooking.value++
  if (currentIndexBooking.value === 5) {
    currentIndexBooking.value = 0
  }
}
</script>
<template>
  <div class="flex flex-col lg:flex-row lg:justify-between">
    <div class="w-full flex flex-col lg:flex-row h-full lg:w-2/5 items-center gap-2 ">
      <div class="left-0 hidden transform lg:flex justify-center items-center">
        <button @click="prevImageBooking"
          class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
          <Icon icon="ic:baseline-keyboard-double-arrow-left" />
        </button>
      </div>
      <div class="image-hover cursor-pointer w-full h-[200px] md:h-[300px] lg:h-[260px] lg:w-[500px] relative">
        <Transition>
          <img @click="popupOpen" v-if="currentIndexBooking === 0" src="../assets/BookingAdmin.png" alt=""
            class="w-full h-auto absolute">
        </Transition>
        <Transition>
          <img @click="popupOpen2" v-if="currentIndexBooking === 1" src="../assets/BookingBook.png" alt=""
            class="w-full h-auto absolute">
        </Transition>
        <Transition>
          <img @click="popupOpen3" v-if="currentIndexBooking === 2" src="../assets/BookingDelete.png" alt=""
            class="w-full h-auto absolute">
        </Transition>
        <Transition>
          <img @click="popupOpen4" v-if="currentIndexBooking === 3" src="../assets/BookingLogin.png" alt=""
            class="w-full h-auto absolute">
        </Transition>
        <Transition>
          <img @click="popupOpen5" v-if="currentIndexBooking === 4" src="../assets/BoookingOffice.png" alt=""
            class="w-full h-auto absolute">
        </Transition>
      </div>
      <div class="right-0 hidden transform lg:flex justify-center items-center h-full">
        <button @click="nextImageBooking"
          class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
          <Icon icon="ic:baseline-keyboard-double-arrow-right" />
        </button>
      </div>
      <div class="flex lg:hidden w-full justify-center gap-5">
        <div class="left-0 transform flex justify-center items-center h-full">
          <button @click="prevImageBooking"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center  hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-left" />
          </button>
        </div>
        <div class="right-0 transform flex justify-center items-center h-full">
          <button @click="nextImageBooking"
            class="text-3xl bg-yellow-400 rounded-full w-10 h-10 text-center text-black hover:text-gray-500 flex justify-center items-center focus:outline-none">
            <Icon icon="ic:baseline-keyboard-double-arrow-right" />
          </button>
        </div>
      </div>
    </div>
    <div class="w-full mt-5 sm:mt-[150px] md:mt-0 flex lg:w-2/5 flex-col">
      <div class="w-full flex justify-center mb-5">
        <h1 class="border-[2px] border-yellow-400 font-bold text-yellow-400 p-2 text-center">Booking System</h1>
      </div>
      <p class="text-yellow-400 text-center">Project Thema : <span class="text-white">Login, Registrierung, Favoriten,
          Bookingplan, Reservations, Administration, Profile</span></p>
      <p class="text-yellow-400 text-center">Languages and Frameworks : <span class="text-white">Vuejs, HTML, CSS,
          Tailwind</span></p>
      <p class="text-yellow-400 text-center">Used Packages : <span class="text-white">axios, jwt-decod,
          @vuepic/vue-datepicker, corelodas, pinia, vue-router@4, iconify/vue, vite, autoprefixer</span></p>
      <div class="flex justify-center mt-5">
        <button @click="notificationCard.visitButtonErrorAnimation()" class="border-[2px] relative w-20 h-10 text-center border-yellow-400 text-white">Visit<span
            class="top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full absolute animate-ping"></span></button>
      </div>
    </div>
  </div>
  <VModal :open="popupOpenToogle" @close="popupCloseButton()">
    <template #default>
      <div class="flex justify-center items-center max-w-[1000px]">
        <img v-if="selectedImage1" class=" bg-red-500" src="../assets/BookingAdmin.png">
        <img v-if="selectedImage2" class=" bg-red-500" src="../assets/BookingBook.png">
        <img v-if="selectedImage3" class=" bg-red-500" src="../assets/BookingDelete.png">
        <img v-if="selectedImage4" class=" bg-red-500" src="../assets/BookingLogin.png">
        <img v-if="selectedImage5" class=" bg-red-500" src="../assets/BoookingOffice.png">
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

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>