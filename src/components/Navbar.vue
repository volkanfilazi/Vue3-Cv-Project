<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useNavbarStore } from '../Store/Navbar.store';

const navbarStore = useNavbarStore()
const darkmode = useStorage("darkmode", false)
const themeCardMessage = ref<boolean>(false)
const themeCardMessageText = ref<string>('')

</script>
<template>
  <div
    class="flex w-full z-[100] min-h-[35px] items-center border-b-[1px] bg-gray-800 lg:px-40 md:z-40 justify-end text-black font-bold" 
    :style="[{backgroundColor : darkmode ? '#f9f8f8' : ''},{borderColor : darkmode ? 'red' : ''}]">
    <div class="hidden pb-2 pt-2 md:hidden lg:flex md:justify-between md:w-full md:items-center relative">

      <div class="flex flex-col justify-center items-center">
        <div class="w-[160px] flex justify-end">
          <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400" :style="{borderColor : darkmode ? 'red' : ''}"></div>
        </div>
        <h1 class="text-white font-bold text-[20px]" :style="{color : darkmode ? 'black' : ''}">Volkan Filazi</h1>
        <div class="w-[160px] flex justify-start">
          <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400" :style="{borderColor : darkmode ? 'red' : ''}"></div>
        </div>
      </div>

      <ul class="flex items-center gap-3 text-white" :style="{color : darkmode ? 'black' : ''}">
        <div v-for="navbar in navbarStore.navbarElements">
          <a class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1"
          :href="navbar.link">{{ navbar.name }}</a>
        </div>
        <Icon class="cursor-pointer text-black" v-if="darkmode" @click="darkmode = false" icon="teenyicons:moon-solid" width="24" height="24" />
        <Icon class="cursor-pointer text-yellow-400" v-if="!darkmode" @click="darkmode = true" icon="ph:sun-fill" width="22" height="22" />
      </ul>
    </div>
    <div class="flex flex-col lg:hidden text-black">
      <input type="checkbox" id="menu-toggle" class="relative sr-only peer" checked>
      <label class="text-center text-yellow-400 w-20" for="menu-toggle">Menu</label>
      <ul
        class="flex absolute right-0 peer-checked:hidden flex-col mt-7 text-yellow-400 gap-1 px-5 bg-[#1f2937] border-b-[1px] border-l-[1px] border-white">
       <div v-for="navbar in navbarStore.navbarElements">
        <li><a :href="navbar.link">{{ navbar.name }}</a></li>
       </div>
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