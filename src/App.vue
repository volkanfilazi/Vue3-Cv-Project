<script setup lang="ts">
import { useStorage } from '@vueuse/core';
const darkModeOn = useStorage('cvDarkmode',Boolean)
</script>

<template>
  <div  class="relative"
  :style="{backgroundColor : darkModeOn ? '#181818' : ''}">
    <RouterView></RouterView>
  </div>
</template>

