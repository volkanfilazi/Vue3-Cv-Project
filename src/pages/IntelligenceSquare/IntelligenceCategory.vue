<script setup lang="ts">
import intelligenceNavbar from '../../IntelligenceComponents/IntelligenceNavbar.vue'
import category from '../../IntelligenceComponents/Category.vue';
import { useStorage } from '@vueuse/core';
const darkModeOn = useStorage('darkmode',Boolean)


</script>

<template>
  <div class="w-full min-h-screen h-full flex justify-center">
    <div class="w-full md:w-1/2 bg-gray-300 flex flex-col items-center gap-2" :style="[{backgroundColor : darkModeOn ? 'black' : ''},
    {borderRight : darkModeOn ? 'solid' : 'none'},
    {borderLeft : darkModeOn ? 'solid' : 'none'},
    {borderColor : darkModeOn ? 'white' : 'initial'}
    ]">
      <intelligenceNavbar></intelligenceNavbar>
      <category></category>
    </div>
  </div>
</template>