<script setup lang="ts">
import Progress from './Progress.vue'
import { ref } from 'vue';
import LeftIntro from '../components/LeftIntro.vue'

const progress = ref(0)
const progress2 = ref(0);
const progress3 = ref(0)

function progressAnimation() {
    let i = 0;
    const timer = setInterval(() => {
        progress.value = i;
        progress2.value = (i * 80) / 90;
        progress3.value = (i * 70) / 90;
        i++;
        if (i > 90) {
            clearInterval(timer);
        }
    }, 10);
}

progressAnimation()
</script>
<template>
    <div class="flex z-40 opacity-90">
        <input type="checkbox" id="drawer-toggle" class="relative sr-only peer z-40" checked>
        <label for="drawer-toggle"
            class="absolute top-0 cursor-pointer left-0 z-40 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:left-64 sm:peer-checked:left-64 md:peer-checked:left-[500px]">
            <div class="w-6 h-1 mb-3 rotate-45 bg-white rounded-lg"></div>
            <div class="w-6 h-1 -rotate-45 bg-white rounded-lg"></div>
        </label>
        <div
            class="fixed top-0 left-0 z-40 w-64 sm-w-64 md:w-[500px] h-full transition-all duration-500 transform -translate-x-full opacity-90 bg-black border-r-[1px] text-white shadow-lg peer-checked:translate-x-0">
            <div
                class="px-6 py-4 flex flex-col z-40 bg-gray-900 text-white border-b-[2px] border-yellow-600 justify-center items-center">
                <h2 class="text-lg font-semibold">Volkan Filazi</h2>
                <p class="text-gray-500">Front-end Web Developer</p>
                <p class="text-gray-500">Android Developer</p>
            </div>
            <LeftIntro></LeftIntro>
        </div>
    </div>
</template>