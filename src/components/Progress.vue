<script setup lang="ts"></script>
<template>
    <div class="relative flex items-center justify-center">
        <div id="progress" class="w-[80px] h-[80px] rounded-full bg-yellow-500"></div>
        <div class="w-[65px] h-[65px] absolute rounded-full text-center flex justify-center items-center bg-[#12122a]">
            <span class="text-[12px]">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<style scoped>
#progress{
}
</style>