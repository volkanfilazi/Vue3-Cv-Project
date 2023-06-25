<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useNavbarStore } from '../Store/Navbar.store';
import i18n from '../i18n';
import VNavIcon from './V-Base/V-NavIcon.vue';

const navbarStore = useNavbarStore()
const darkmode = useStorage("cvDarkmode", false)
const themeCardMessage = ref<boolean>(false)
const themeCardMessageText = ref<string>('')
const cvSaveLanguage = useStorage('cvLanguage', String)

onMounted(() => {
  if (!cvSaveLanguage.value) {
    cvSaveLanguage.value = 'eng'
    i18n.global.locale = cvSaveLanguage.value
  }
})

function changeLanguage(lang: string) {
  cvSaveLanguage.value = lang
  i18n.global.locale = lang
}

</script>
<template>
  <div
    class="flex w-full z-[100] min-h-[35px] items-center border-b-[1px] bg-gray-800 lg:px-40 md:z-40 justify-end text-black font-bold"
    :style="[{ backgroundColor: darkmode ? '#f9f8f8' : '' }, { borderColor: darkmode ? 'red' : '' }]">
    <div class="hidden pb-2 pt-2 md:flex md:justify-between md:w-full md:items-center relative">
      <VNavIcon>Volkan Filazi</VNavIcon>
      <ul class="flex items-center gap-3 text-white" :style="{ color: darkmode ? 'black' : '' }">
        <div v-for="navbar in navbarStore.navbarElements">
          <a class="scroll-smooth cursor-pointer transition-all duration-300 border-b-[1px] border-transparent hover:border-yellow-400 hover:transition-all hover:duration-300 p-1"
          :class="{'hover:!border-black' : darkmode}"
            :href="navbar.link">{{ $t(navbar.name) }}</a>
        </div>
        <Icon class="cursor-pointer" @click="changeLanguage('ger')" v-if="cvSaveLanguage === 'eng'"
          icon="openmoji:flag-germany" width="32" height="32" />
        <Icon class="cursor-pointer" @click="changeLanguage('eng')" v-if="cvSaveLanguage === 'ger'"
          icon="openmoji:flag-england" width="32" height="32" />
        <Icon class="cursor-pointer text-black" v-if="darkmode" @click="darkmode = false" icon="teenyicons:moon-solid"
          width="24" height="24" />
        <Icon class="cursor-pointer text-yellow-400" v-if="!darkmode" @click="darkmode = true" icon="ph:sun-fill"
          width="22" height="22" />
      </ul>
    </div>
    <div class="grid grid-cols-3 w-full px-2 py-1 md:hidden text-black">
      <div class="flex items-center gap-1 justify-start">
        <Icon class="cursor-pointer" @click="changeLanguage('ger')" v-if="cvSaveLanguage === 'eng'"
          icon="openmoji:flag-germany" width="32" height="32" />
        <Icon class="cursor-pointer" @click="changeLanguage('eng')" v-if="cvSaveLanguage === 'ger'"
          icon="openmoji:flag-england" width="32" height="32" />
        <Icon class="cursor-pointer text-black" v-if="darkmode" @click="darkmode = false" icon="teenyicons:moon-solid"
          width="24" height="24" />
        <Icon class="cursor-pointer text-yellow-400" v-if="!darkmode" @click="darkmode = true" icon="ph:sun-fill"
          width="22" height="22" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="w-[100px] flex justify-end">
          <div class="border-r-[2px] border-t-[2px] w-2 h-2 border-yellow-400"
            :style="{ borderColor: darkmode ? 'red' : '' }"></div>
        </div>
        <h1 class="text-white font-bold text-[12px]" :style="{ color: darkmode ? 'black' : '' }">Volkan Filazi</h1>
        <div class="w-[100px] flex justify-start">
          <div class="border-l-[2px] border-b-[2px] w-2 h-2 border-yellow-400"
            :style="{ borderColor: darkmode ? 'red' : '' }"></div>
        </div>
      </div>
      <div class="flex items-center justify-end">
          <input type="checkbox" id="menu-toggle" class="relative sr-only peer" checked>
          <label class="text-center text-yellow-400 w-20" for="menu-toggle" :style="{color : darkmode ? 'black' : ''}">Menu</label>
        <ul
          class="flex absolute right-0 mt-[178px] peer-checked:hidden flex-col text-yellow-400 gap-1 px-5 bg-[#1f2937] border-b-[1px] border-l-[1px] border-white"
          :style="[{backgroundColor : darkmode ? '#f9f8f8' : ''},{borderColor : darkmode ? 'red' : ''},{color : darkmode ? 'black' : ''}]"
          >
          <div v-for="navbar in navbarStore.navbarElements">
            <li><a :href="navbar.link">{{ $t(navbar.name) }}</a></li>
          </div>
        </ul>
      </div>
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