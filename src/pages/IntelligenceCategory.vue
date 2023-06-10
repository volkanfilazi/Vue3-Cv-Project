<script setup lang="ts">
import intelligenceNavbar from '../IntelligenceComponents/IntelligenceNavbar.vue'
import category from '../IntelligenceComponents/Category.vue';

</script>

<template>
  <div class="w-full h-screen flex justify-center">
    <div class="w-full md:w-1/2 h-full bg-gray-300 flex flex-col items-center gap-2">
      <intelligenceNavbar></intelligenceNavbar>
      <category></category>
    </div>
  </div>
</template>