<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import intelligenceNavbar from '../../IntelligenceComponents/IntelligenceNavbar.vue'
import intelligenceStart from '../../IntelligenceComponents/IntelligenceStart.vue'

const darkModeOn = useStorage('darkmode',Boolean)

</script>

<template>
  <div class="w-full min-h-screen h-full bg-white flex justify-center" :style="{backgroundColor : darkModeOn ? 'black' : ''}">
    <div class="w-full lg:w-1/2 bg-gray-300 flex flex-col items-center gap-2" 
    :style="[{backgroundColor : darkModeOn ? 'black' : ''},
    {borderRight : darkModeOn ? 'solid' : 'none'},
    {borderLeft : darkModeOn ? 'solid' : 'none'},
    {borderColor : darkModeOn ? 'white' : 'initial'}
    ]">
      <intelligenceNavbar></intelligenceNavbar>
      <intelligenceStart></intelligenceStart>
    </div>
  </div>
</template>