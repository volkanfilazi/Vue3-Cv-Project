<script setup lang="ts">
import { Icon } from '@iconify/vue';
import VSettingsModal from './V-Modal/V-SettingsModal.vue';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";
import VLanguageModal from './V-Modal/V-LanguageModal.vue'
import { useDark } from "@vueuse/core";
import i18n from '../i18n';

const router = useRouter()
const settingsOpenToogle = ref<boolean>(false)
const gameHistoryOpenToogle = ref<boolean>(false)
const languageOpenToogle = ref<boolean>(false)
const history = ref<any[]>([])
const scoreHistory = useStorage('history', [])
const saveLanguage = useStorage('language', String)
const darkModeOn = useStorage('darkmode', Boolean)

onMounted(() => {
  if (!saveLanguage.value) {
    i18n.global.locale = 'eng'
  }
})

function darkLightMode() {
  darkModeOn.value = darkmodeOn.value
}

function changeLanguage(lang: string) {
  saveLanguage.value = lang
  i18n.global.locale = lang
}

function settingsOpenPopup() {
  settingsOpenToogle.value = true
}

function settingsclosePopup() {
  settingsOpenToogle.value = false
}

function showHistory() {
  history.value = scoreHistory.value
  gameHistoryOpenToogle.value = true
}

function closeHistory() {
  gameHistoryOpenToogle.value = false
}

function languageOpenButton() {
  languageOpenToogle.value = true
}

function languageCloseButton() {
  languageOpenToogle.value = false
}

function clearHistory() {
  scoreHistory.value = [];
  history.value = []
}
</script>

<template>
  <div class="w-full h-20 grid grid-cols-3 items-center bg-red-500"
    :style="[{ backgroundColor: darkModeOn ? 'black' : '' }, { borderBottom: darkModeOn ? 'solid' : 'none' }, { borderColor: darkModeOn ? 'white' : 'initial' }]"
    :dir="$i18n.locale == 'eng' ? 'ger' : 'eng'">
    <div @click="languageOpenButton()" class="flex group justify-center cursor-pointer">
      <Icon class="hover:text-black transition-all duration-300 text-white" icon="material-symbols:language" width="24"
        height="24" />
    </div>
    <div class="cursor-pointer group" @click="router.push({ name: 'intelligenceSquare' })">
      <p class="font-bold transition-all duration-300 group-hover:text-black text-white text-center">Intelligence Square
      </p>
    </div>
    <div class="flex gap-2 justify-center cursor-pointer">
      <div @click="showHistory()" class="group">
        <Icon class="group-hover:text-black transition-all duration-300 text-white" icon="material-symbols:history"
          width="24" height="24" />
      </div>
      <div @click="settingsOpenPopup()" class="group">
        <Icon class="group-hover:text-black transition-all duration-300 text-white"
          icon="material-symbols:settings-outline" width="24" height="24" />
      </div>
    </div>
  </div>
  <VSettingsModal :open="settingsOpenToogle" @close="settingsclosePopup()">
    <div class="flex flex-col gap-2 mt-10 text-white">
      <button @click="router.push({ name: 'intelligenceSquare' }), settingsOpenToogle = false"
        class="bg-red-500 p-1 h-16 rounded-md hover:opacity-80 transition-all duration-300">Homepage</button>
      <button @click="router.push({ name: 'intelligenceCategory' }), settingsOpenToogle = false"
        class="bg-red-500 p-1 h-16 rounded-md hover:opacity-80 transition-all duration-300">New Game</button>
      <button @click="darkLightMode"
        class="bg-black text-white p-1 h-16 rounded-md hover:opacity-80 transition-all duration-300"
        :class="[{ 'bg-black': darkmodeOn }, { 'bg-yellow-400': darkModeOn }, { 'text-gray-900': darkModeOn }]">
        <span v-if="darkmodeOn">Dark Mode</span>
        <span v-if="darkModeOn">Light Mode</span>
      </button>
        <button @click="router.push({ name: 'beforeApp' }), settingsOpenToogle = false"
        class="bg-red-500 p-1 h-16 rounded-md hover:opacity-80 transition-all duration-300">Developer Page</button>
    </div>
  </VSettingsModal>
  <VSettingsModal :open="gameHistoryOpenToogle" @close="closeHistory()">
    <div class="flex items-center flex-col gap-2">
      <div @click="clearHistory" class="flex justify-start w-full">
        <button
          class="border-[2px] p-1 border-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white">Clear
          History</button>
      </div>
      <h1 class="text-center font-bold">Result History</h1>
      <div class="flex gap-1 border-[1px] border-black" v-for="item in history" :key="item">
        <div v-for="itemx in item" class="border-[1px]">
          <p class="border-[1px] text-center p-1 text-white min-w-[50px]"
            :class="[{ 'bg-red-500': itemx === 'X' }, { 'bg-green-500': itemx === 'O' }, { 'bg-orange-500': itemx === 'PASS' }]">
            {{ itemx }}</p>
        </div>
      </div>
    </div>
  </VSettingsModal>
  <VLanguageModal :open="languageOpenToogle" @close="languageCloseButton">
    <div class="w-full flex h-2/3 items-center justify-center gap-10">
      <div for="eng" class="border-[2px] px-1 border-transparent" :style="[
        { borderColor: saveLanguage === 'eng' ? 'black' : '' },
        { boxShadow: saveLanguage === 'eng' ? '3px 2px 2px black' : '' }
      ]" @click="changeLanguage('eng')">
        <Icon icon="openmoji:flag-england" width="64" height="64" />
      </div>
      <div class="border-[2px] px-1 border-transparent"
        :style="[{ borderColor: saveLanguage === 'ger' ? 'black' : '' }, { boxShadow: saveLanguage === 'ger' ? '3px 2px 2px black' : '' }]"
        @click="changeLanguage('ger')">
        <Icon icon="openmoji:flag-germany" width="64" height="64" />
      </div>
  </div>
</VLanguageModal></template>