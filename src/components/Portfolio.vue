<script setup lang="ts">
import { ref } from 'vue';
import BookingSystem from '../components/BookingSystem.vue'
import Sumsi from '../components/Sumsi.vue'
import Restaurant from '../components/Restaurant.vue'
import Cv from '../components/Cv.vue'

const selectedBookingSystem = ref(true)
const selectedSumsi = ref(false)
const selectedRestaurant = ref(false)
const selectedCv = ref(false)
const selectedInstagram = ref(false)

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
    <div class="flex flex-col justify-center w-full relative h-screen gap-5">
        <div class="flex flex-col w-full justify-center sm:w-full text-white md:w-full md:h-2/5 p-2">
            <div class="flex flex-col sm:flex-col md:flex-row items-center gap-5 justify-center h-full">
                <div class="flex flex-col w-full p-5 border-[1px] gap-2 h-full sm-w-full md:w-1/4">
                    <h2 class="text-yellow-400 font-bold">Portfolio</h2>
                    <h2 @click="booking()" class="text-white cursor-pointer transition-all duration-500"
                        :class="{ 'text-yellow-400 transition-all duration-500': selectedBookingSystem }">Booking System</h2>
                    <h2 @click="sumsi()" class="text-white cursor-pointer" :class="{ 'text-yellow-400 ': selectedSumsi }">
                        Raiffeisen Sumsi</h2>
                    <h2 @click="restaurant()" class="text-white cursor-pointer transition-all duration-500" :class="{ 'text-yellow-400 transition-all duration-500': selectedRestaurant }">
                        Restaurant Order</h2>
                    <h2 @click="cv()" class="text-white cursor-pointer transition-all duration-500" :class="{ 'text-yellow-400 transition-all duration-500': selectedCv }">First Cv Volkan
                        Filazi</h2>
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
</template>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}</style>