<script setup lang="ts">
import { useStorage } from '@vueuse/core';

const darkmode = useStorage("cvDarkmode", Boolean)

</script>
<template>
    <div class="flex bottom-0 bg-[#222a33] justify-between border-t-[1px]" :style="[{backgroundColor : darkmode ? '#f9f8f8' : ''},{borderColor : darkmode ? 'red' : ''}]">
        <p class="text-center w-full pt-5 pb-5 text-yellow-400 font-bold" :style="{color : darkmode ? 'red' : '' }">Created By Volkan Filazi</p>
    </div>
</template>