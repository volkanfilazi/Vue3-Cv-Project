<script setup lang="ts">
import { ref } from 'vue';

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
    <div class="flex flex-col justify-center w-full items-center">
        <div class="profile-image-container rounded-[9999px] border-[1px] border-yellow-400 mt-5">
            <img src="../assets/1671222515527-removebg-preview (1).png"
                class="w-[200px] rounded-[9999px] h-[200px] overflow-hidden" alt="">
        </div>
    </div>
    <div class="w-full p-5 text-white space-y-2">
        <div>
            <h2>Html</h2>
            <div class="shadow w-full bg-white rounded-lg">
                <div class="bg-yellow-500 text-xs leading-none rounded-lg py-1 text-center text-white" :style="`width: ${progress}%`">
                    {{
                        progress }}</div>
            </div>
        </div>
        <div>
            <h2>Css</h2>
            <div class="shadow w-full bg-white rounded-lg">
                <div class="bg-yellow-500 text-xs leading-none rounded-lg py-1 text-center text-white" :style="`width: ${progress2}%`">
                    {{
                        progress - 10 }}</div>
            </div>
        </div>
        <div>
            <h2>Vuejs</h2>
            <div class="shadow w-full bg-white rounded-lg">
                <div class="bg-yellow-500 text-xs leading-none rounded-lg py-1 text-center text-white" :style="`width: ${progress2}%`">
                    {{
                        progress - 20 }}</div>
            </div>
        </div>
        <div>
            <h2>Java</h2>
            <div class="shadow w-full bg-white rounded-lg">
                <div class="bg-yellow-500 text-xs leading-none rounded-lg py-1 text-center text-white" :style="`width: ${progress2}%`">
                    {{
                        progress - 10 }}</div>
            </div>
        </div>
        <div>
            <h2>Kotlin</h2>
            <div class="shadow w-full bg-white rounded-lg">
                <div class="bg-yellow-500 text-xs leading-none rounded-lg py-1 text-center text-white" :style="`width: ${progress2}%`">
                    {{
                        progress - 10 }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>