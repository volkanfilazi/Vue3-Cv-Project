<script setup lang="ts">
import { ref } from 'vue';
import BookingSystem from '../components/BookingSystem.vue'
import Sumsi from '../components/Sumsi.vue'
import Restaurant from '../components/Restaurant.vue'
import Cv from '../components/Cv.vue'
import { useStorage } from "@vueuse/core";


const selectedBookingSystem = ref(true)
const selectedSumsi = ref(false)
const selectedRestaurant = ref(false)
const selectedCv = ref(false)
const selectedInstagram = ref(false)
const visitToogle = useStorage("visit","")

function booking() {
    selectedSumsi.value = false
    selectedRestaurant.value = false
    selectedCv.value = false
    selectedInstagram.value = false

    setTimeout(() => {
        selectedBookingSystem.value = true
    }, 300)
}
function sumsi() {
    selectedBookingSystem.value = false
    selectedRestaurant.value = false
    selectedCv.value = false
    selectedInstagram.value = false

    setTimeout(() => {
        selectedSumsi.value = true
    }, 300)
}

function restaurant() {
    selectedBookingSystem.value = false
    selectedSumsi.value = false
    selectedCv.value = false
    selectedInstagram.value = false

    setTimeout(() => {
        selectedRestaurant.value = true
    }, 300)
}

function cv() {
    selectedBookingSystem.value = false
    selectedSumsi.value = false
    selectedRestaurant.value = false
    selectedInstagram.value = false

    setTimeout(() => {
        selectedCv.value = true
    }, 300)
}
</script>
<template>
    <div id="portfolio" class="flex flex-col justify-center w-full relative mb-5 h-full sm:h-full md:h-full items-center gap-5">
        <div class="flex flex-col w-full justify-center sm:w-full text-white md:w-4/5 md:h-[400px]">
            <div class="flex flex-col sm:flex-col md:flex-row items-center gap-5 justify-center h-full">
                <div class="flex flex-col w-full p-5 border-[1px] gap-2 h-full sm-w-full md:w-1/4">
                    <h2 class="text-yellow-400 font-bold">Portfolio</h2>
                    <button @click="booking()" class="text-start text-white cursor-pointer transition-all duration-500"
                        :class="{ 'text-yellow-400 transition-all duration-500': selectedBookingSystem }">Booking System</button>
                    <button @click="sumsi()" class="text-start text-white cursor-pointer" :class="{ 'text-yellow-400 ': selectedSumsi }">
                        Raiffeisen Sumsi</button>
                    <button @click="restaurant()" class="text-start text-white cursor-pointer transition-all duration-500" :class="{ 'text-yellow-400 transition-all duration-500': selectedRestaurant }">
                        Restaurant Order</button>
                    <button @click="cv()" class="text-start text-white cursor-pointer transition-all duration-500" :class="{ 'text-yellow-400 transition-all duration-500': selectedCv }">First Cv Volkan
                        Filazi</button>
                </div>
                <div class="flex border-[1px] w-full h-full">
                    <Transition>
                        <BookingSystem v-if="selectedBookingSystem"></BookingSystem>
                    </Transition>
                    <Transition>
                        <Sumsi v-if="selectedSumsi"></Sumsi>
                    </Transition>
                    <Transition>
                        <Restaurant v-if="selectedRestaurant"></Restaurant>
                    </Transition>
                    <Transition>
                        <Cv v-if="selectedCv"></Cv>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
    <div class="flex z-[120]">
    <div
      class="fixed bottom-0 right-0 flex flex-col rounded-lg bg-red-500 shadow-sm shadow-black justify-center items-center z-40 w-64 sm-w-64 md:w-[250px] md:h-[100px] mb-20 ml-2 transition-transform duration-500 transform"
      :class="{ 'translate-x-full': !visitToogle, 'translate-x-0 mr-2': visitToogle}">
      <p v-if="visitToogle" class="transition-all duration-500 text-white">not working</p>
      
    </div>
  </div>
</template>
<style scoped>

button{
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