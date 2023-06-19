<script setup lang="ts">
import NavBar from '../../myTubeComponents/NavBar.vue'
import Footer from '../../myTubeComponents/Footer.vue'
import AllVideos from '../../myTubeComponents/AllVideos.vue'

</script>

<template>
  <NavBar></NavBar>
  <div class="min-h-screen">
    <AllVideos></AllVideos>
  </div>
  <Footer></Footer>
</template>