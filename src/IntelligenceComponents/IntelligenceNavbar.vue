<script setup lang="ts">
import { Icon } from '@iconify/vue';
import VSettingsModal from './V-Modal/V-SettingsModal.vue';
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const router = useRouter()
const settingsOpenToogle = ref<boolean>(false)
const gameHistoryOpenToogle = ref<boolean>(false)
const history = ref<any[]>([])
const scoreHistory = useStorage('history', [])
const darkModeOn = useStorage('darkmode', Boolean)

function darkLightMode() {
  darkModeOn.value = !darkModeOn.value
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

function clearHistory() {
  scoreHistory.value = [];
  history.value = []
}
</script>

<template>
  <div class="w-full h-20 grid grid-cols-3 items-center bg-red-500"
    :style="[{ backgroundColor: darkModeOn ? 'black' : '' }, { borderBottom: darkModeOn ? 'solid' : 'none' }, { borderColor: darkModeOn ? 'white' : 'initial' }]"
    :dir="$i18n.locale == 'eng' ? 'ger' : 'eng'">
    <div @click="showHistory()" class="group flex justify-center cursor-pointer">
      <Icon class="group-hover:text-black transition-all duration-300 text-white" icon="material-symbols:history"
        width="24" height="24" />
    </div>
    <div class="cursor-pointer group" @click="router.push({ name: 'intelligenceSquare' })">
      <p class="font-bold transition-all duration-300 group-hover:text-black text-white text-center">Intelligence Square
      </p>
    </div>
    <div @click="settingsOpenPopup()" class="group flex justify-center cursor-pointer">
      <Icon class="group-hover:text-black transition-all duration-300 text-white" icon="material-symbols:settings-outline"
        width="24" height="24" />
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
        :class="[{ 'bg-black': darkModeOn }, { 'text-white': darkModeOn }, { 'bg-yellow-400': !darkModeOn }, { 'text-gray-900': !darkModeOn }]">
        <span v-if="darkModeOn">Dark Mode</span>
        <span v-if="!darkModeOn">Light Mode</span>
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
</template>