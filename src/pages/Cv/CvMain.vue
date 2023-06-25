<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Intro from '../../components/Intro.vue'
import Tools from '../../components/Tools.vue'
import Footer from '../../components/Footer.vue'
import Specialization from '../../components/Specialization.vue'
import Languages from '../../components/Languages.vue'
import MyResume from '../../components/MyResume.vue'
import VProjectInfoModal from '../../restaurantComponents/V-Model/V-ProjectInfoModal.vue'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import BottomNavigation from '../../components/BottomNavigation.vue'
import VAIButton from '../../components/V-Base/V-AIButton.vue'
import VAnotherProjectAnimation from '../../components/V-Base/V-AnotherProjectAnimation.vue'
import router from '../../router/router';


const projectInfoToogle = ref(false)
const darkmode = useStorage("cvDarkmode", Boolean)

function openProjectInfoToogle() {
  projectInfoToogle.value = true

}
function closeProjectInfoToogle() {
  projectInfoToogle.value = false
}
</script>

<template>
  <div id="test" class="h-full flex-col bg-gray-700 flex" :style="{ backgroundColor: darkmode ? 'white' : '' }">
    <Navbar></Navbar>
    <div class="w-full h-full flex md:px-0 lg:px-20 xl:px-40">
      <div class="w-full flex relative h-full flex-col md:w-full bg-gray-800"
        :style="{ backgroundColor: darkmode ? '#f9f8f8' : '' }">
        <VAnotherProjectAnimation @click="router.push({name: 'secondCv'})">Resume 2</VAnotherProjectAnimation>
        <VAIButton @click="openProjectInfoToogle"></VAIButton>
        <Intro id="intro"></Intro>
        <Tools id="tools"></Tools>
        <Languages id="languages"></Languages>
        <Specialization id="specialization"></Specialization>
        <MyResume id="myresume"></MyResume>
        <VProjectInfoModal :open="projectInfoToogle" @close="closeProjectInfoToogle()"></VProjectInfoModal>
        <BottomNavigation></BottomNavigation>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
