<script setup lang="ts">
import { ref } from 'vue';
import VModal from '../components/V-Modal.vue'

const popupOpenToogle = ref(false)
const selectedImage1 = ref(false)
const selectedImage2 = ref(false)
const selectedImage3 = ref(false)
const selectedImage4 = ref(false)

function popupOpen() {
    selectedImage1.value = true
    popupOpenToogle.value = true
}

function popupOpen2(){
    selectedImage2.value = true
    popupOpenToogle.value = true
}
function popupOpen3(){
    selectedImage3.value = true
    popupOpenToogle.value = true
}
function popupOpen4(){
    selectedImage4.value = true
    popupOpenToogle.value = true
}
function popupCloseButton() {
    selectedImage1.value = false
    selectedImage2.value = false
    selectedImage3.value = false
    selectedImage4.value = false
    popupOpenToogle.value = false
}
</script>
<template>
    <div class="flex items-center justify-center h-full w-full">
      <div class="flex justify-center p-3 items-center w-full gap-2 h-full sm-w-full md:w-1/2">
            <div class="h-full ">
                <h2 class="border-[1px]">Project Thema</h2>
                <p>Cv Page</p>
                <p>Responsive</p>
                <p>Like images and save them</p>
                <p>Contact</p>
                <p>Filter Portfolio</p>
            </div>
            <div class="h-full">
                <h2 class="border-[1px]">Languages and Frameworks</h2>
                <p>Vanille js</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
            </div>
        </div>
        <div class="grid grid-flow-row grid-cols-1 sm:gird-cols-1 md:grid-cols-2 justify-end p-5 gap-2 h-full">
            <img @click="popupOpen()" class=" bg-red-500 sm:w-full md:max-w-[300px] cursor-pointer" src="../assets/CvProfile.png">
            <img @click="popupOpen2()" class=" bg-red-500 sm:w-full md:max-w-[300px] cursor-pointer" src="../assets/CvEdu.png">
            <img @click="popupOpen3()" class=" bg-red-500 sm:w-full md:max-w-[300px] cursor-pointer" src="../assets/CvProjects.png">
            <img @click="popupOpen4()" class=" bg-red-500 sm:w-full md:max-w-[300px] cursor-pointer" src="../assets/CvSkills.png">
        </div>
    </div>

    <VModal :open="popupOpenToogle" @close="popupCloseButton()">
        <template #default>
            <div class="flex justify-center items-center max-w-[1000px]">
                <img v-if="selectedImage1" class=" bg-red-500" src="../assets/CvProfile.png">
                <img v-if="selectedImage2" class=" bg-red-500" src="../assets/CvEdu.png">
                <img v-if="selectedImage3" class=" bg-red-500" src="../assets/CvProjects.png">
                <img v-if="selectedImage4" class=" bg-red-500" src="../assets/CvSkills.png">
            </div>
        </template>
    </VModal>
</template>