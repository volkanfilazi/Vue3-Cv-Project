<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { ref } from 'vue';
import { useNotificationCard } from '../Store/NotificationCard';
import { useRouter } from "vue-router";

const router = useRouter()
const notificationCard = useNotificationCard()
const saveColor = useStorage("themeColor", "yellow")
const themeToogle = ref<boolean>(false)
const themeCardMessage = ref<boolean>(false)
const themeCardMessageText = ref<string>('')

function changeColor(colorValue: string) {
  if (colorValue === "white") {
    saveColor.value = "white"
    themeCardMessage.value = true
    themeCardMessageText.value = "white"
    setTimeout(() => {
      themeCardMessage.value = false
    }, 2000)
  }
  if (colorValue === "green") {
    saveColor.value = "green"
    themeCardMessage.value = true
    themeCardMessageText.value = "green"
    setTimeout(() => {
      themeCardMessage.value = false
    }, 2000)
  }
  if (colorValue === "orange") {
    saveColor.value = "orange"
    themeCardMessage.value = true
    themeCardMessageText.value = "orange"
    setTimeout(() => {
      themeCardMessage.value = false
    }, 2000)
  }
  if (colorValue === "red") {
    saveColor.value = "red"
    themeCardMessage.value = true
    themeCardMessageText.value = "red"
    setTimeout(() => {
      themeCardMessage.value = false
    }, 2000)
  }
  if (colorValue === "yellow") {
    saveColor.value = "yellow"
    themeCardMessage.value = true
    themeCardMessageText.value = "yellow"
    setTimeout(() => {
      themeCardMessage.value = false
    }, 2000)
  }
}
</script>
<template>
  <div
    class="flex w-full z-[100] min-h-[35px] items-center border-b-[1px] bg-gray-800 lg:px-40 md:z-40 justify-end text-black font-bold">
    <div class="hidden pb-2 pt-2 md:hidden lg:flex md:justify-between md:w-full md:items-center relative">

      <div class="flex flex-col justify-center items-center">
        <div class="w-[160px] flex justify-end">
          <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
        </div>
        <h1 class="text-white font-bold text-[20px]" :class="[
          { 'text-white': saveColor === 'white' },
          { 'text-green-500': saveColor === 'green' },
          { 'text-orange-600': saveColor === 'orange' },
          { 'text-red-600': saveColor === 'red' },
          { 'text-yellow-400': saveColor === 'yellow' }
        ]">Volkan Filazi</h1>
        <div class="w-[160px] flex justify-start">
          <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
        </div>
      </div>

      <ul class="flex items-center gap-3" :class="[
        { 'text-white': saveColor === 'white' },
        { 'text-green-500': saveColor === 'green' },
        { 'text-orange-600': saveColor === 'orange' },
        { 'text-red-600': saveColor === 'red' },
        { 'text-yellow-400': saveColor === 'yellow' }
      ]">
        <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          href="#intro">Intro</a>
        <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          href="#tools">Tools</a>
        <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          href="#languages">Languages</a>
        <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          href="#specialization">Specialization</a>
        <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          href="#career">Career</a>
        <div class="cursor-pointer border-[1px] border-transparent hover:border-white p-1"
          @click="themeToogle = !themeToogle">
          <li>Theme</li>
        </div>
      </ul>

      <div v-if="themeToogle" class="absolute right-0 translate-y-full mt-20">
        <div
          class="flex justify-center items-center gap-2 bg-[#0e152f] rounded-full border-[1px] border-white w-44 h-10 ">
          <div @click="changeColor('white')"
            class=" w-6 h-6 border-[2px] border-transparent top-0 rounded-full bg-white cursor-pointer"
            :class="{ 'border-orange-500': saveColor === 'white' }"></div>
          <div @click="changeColor('green')"
            class=" w-6 h-6 border-[2px] border-transparent bottom-0 rounded-full bg-green-500 cursor-pointer"
            :class="{ 'border-white': saveColor === 'green' }"></div>
          <div @click="changeColor('orange')"
            class=" w-6 h-6 border-[2px] border-transparent  right-0 rounded-full bg-orange-600 cursor-pointer"
            :class="{ 'border-white': saveColor === 'orange' }"></div>
          <div @click="changeColor('red')"
            class=" w-6 h-6 border-[2px] border-transparent  left-0 rounded-full bg-red-600 cursor-pointer"
            :class="{ 'border-white': saveColor === 'red' }"></div>
          <div @click="changeColor('yellow')"
            class=" w-6 h-6 border-[2px] border-transparent  bg-yellow-400 rounded-full cursor-pointer"
            :class="{ 'border-white': saveColor === 'yellow' }"></div>
        </div>
      </div>

    </div>
    <div class="flex flex-col lg:hidden text-black">
      <input type="checkbox" id="menu-toggle" class="relative sr-only peer" checked>
      <label class="text-center text-yellow-400 w-20" for="menu-toggle">Menu</label>
      <ul
        class="flex absolute right-0 peer-checked:hidden flex-col mt-7 text-yellow-400 gap-1 px-5 bg-[#1f2937] border-b-[1px] border-l-[1px] border-white">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#specialization">Specialization</a></li>
      </ul>
    </div>
  </div>
  <div class="flex z-[120]">
    <div
      class="fixed bottom-0 right-0 flex flex-col rounded-lg bg-green-700 shadow-sm shadow-black justify-center items-center z-40 w-64 sm-w-64 md:w-[250px] md:h-[100px] mb-20 ml-2 transition-transform duration-500 transform"
      :class="{ 'translate-x-full': !themeCardMessage, 'translate-x-0 mr-2': themeCardMessage }">
      <p class="transition-all duration-500 text-white text-center">Theme successfully converted to {{
        themeCardMessageText }}</p>
    </div>
  </div>
</template>

<style scoped></style>