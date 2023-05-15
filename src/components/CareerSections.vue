<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
import Work from '../components/Work.vue'
import Hobbies from '../components/Hobbies.vue'
const showWeb = ref(true)
const showApp = ref(false)
const showEdu = ref(false)
const showWork = ref(false)

function showWebDesign() {
    showApp.value = false
    showEdu.value = false
    showWork.value = false
    setTimeout(() => {
        showWeb.value = true
    },500)
}
function showApplication() {
    showWeb.value = false
    showEdu.value = false
    showWork.value = false
    setTimeout(() => {
        showApp.value = true
    }, 500)
}
function showEducation() {
    showApp.value = false
    showWeb.value = false
    showWork.value = false
    setTimeout(() => {
        showEdu.value = true
    }, 500)
}
function showWorking() {
    showApp.value = false
    showEdu.value = false
    showWeb.value = false
    setTimeout(() => {
        showWork.value = true
    }, 500)
}
</script>
<template>
    <div id="skillls" class="skills flex flex-col mt-5 md:mt-0 justify-between h-full sm:h-full md:h-screen md:w-4/4 sm:flex-col md:flex-row w-full md:justify-center md:items-center z-10">
        <div class="flex flex-row justify-center sm:justify-center gap-1 sm:flex-row md:justify-start md:flex-col">
            <button @click="showWebDesign()"
                class="flex cursor-pointer flex-col h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent hover:border-[1px] hover:border-yellow-400 bg-[#21214d] md:h-[150px] md:w-[150px] transition-all duration-500"
                :class="{ 'transition-all duration-500 bg-black border-[1px] border-yellow-400': showWeb }">
                <h2 class="text-white hidden sm:hidden md:flex">Skills</h2>
                <div class="flex gap-1 h-2/3 w-full items-center justify-center">
                    <div class="flex items-center">
                        <Icon class="hidden sm:hidden md:flex" icon="iconoir:design-nib" color="white" width="25" height="25" />
                        <Icon icon="icon-park-outline:code-computer" color="white" width="50" height="50" />
                        <Icon class="hidden sm:hidden md:flex" icon="fluent:design-ideas-20-filled" color="white" width="25" height="25" />
                    </div>
                </div>
            </button>
            <button @click="showApplication()"
            class="flex cursor-pointer flex-col border-b-[1px] h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent hover:border-[1px] hover:border-yellow-400 bg-[#21214d] md:h-[150px] md:w-[150px] transition-all duration-500"
                :class="{ 'transition-all duration-500 bg-black border-yellow-400': showApp }">
                <h2 class="text-white hidden sm:hidden md:flex">Education</h2>
                <div class="flex gap-1 h-2/3 w-full items-center justify-center">
                    <div class="flex items-center">
                        <Icon icon="zondicons:education" color="white" width="50" height="50" />
                    </div>
                </div>
            </button>
            <button @click="showEducation()"
            class="flex cursor-pointer flex-col border-b-[1px] h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent hover:border-[1px] hover:border-yellow-400 bg-[#21214d] md:h-[150px] md:w-[150px] transition-all duration-500"
                :class="{ 'transition-all duration-500 bg-black border-yellow-400': showEdu }">
                <h2 class="text-white hidden sm:hidden md:flex">Work</h2>
                <div class="flex gap-1 h-2/3 w-full items-center justify-center">
                    <div class="flex items-center">
                        <Icon icon="ic:round-work-history" color="white" width="50" height="50" />
                    </div>
                </div>
            </button>
            <button @click="showWorking()"
            class="flex cursor-pointer flex-col h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] justify-center items-center border-[1px] border-transparent hover:border-[1px] hover:border-yellow-400 bg-[#21214d] md:h-[150px] md:w-[150px] transition-all duration-500"
                :class="{ 'transition-all duration-500 bg-black border-yellow-400': showWork }">
                <h2 class="text-white hidden sm:hidden md:flex">Hobbies</h2>
                <div class="flex gap-1 h-2/3 w-full items-center justify-center">
                    <div class="flex items-center">
                        <Icon icon="bi:emoji-smile-fill" color="white" width="50" height="50" />
                    </div>
                </div>
            </button>
        </div>
        <div class="flex z-20 md:w-3/4 w-full">
            <Transition>
                <div class=" opacity-90 w-full h-full md:h-[70%]" v-if="showWeb">
                    <Skills></Skills>
                </div>
            </Transition>
            <Transition>
                <div class="w-full h-full md:h-[70%]" v-if="showApp">
                    <Education></Education>
                </div>
            </Transition>
            <Transition>
                <div class="w-full h-full md:h-[70%]" v-if="showEdu">
                    <Work></Work>
                </div>
            </Transition>
            <Transition>
                <div class="w-full h-full md:h-[70%]" v-if="showWork">
                    <Hobbies></Hobbies>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
button:hover{
  cursor: url('../image/icons8-hand-cursor-50.png'), auto; 
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}</style>