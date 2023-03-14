<script setup lang="ts"></script>
<template>
    <div class="flex w-full z-10 md:px-40 fixed md:z-40 justify-end text-white">
        <div class="hidden pt-5 pb-5 sm:hidden md:flex">
            <ul class="flex gap-2">
            <li class="cursor-pointer hover:text-yellow-400">Intro</li>
            <li class="cursor-pointer hover:text-yellow-400">Career</li>
            <li class="cursor-pointer hover:text-yellow-400">Portfolio</li>
        </ul>
        </div>
        <div class="flex flex-col md:hidden bg-red-500 text-white">
            <input type="checkbox" id="menu-toggle" class="relative sr-only peer" checked>
            <label class="text-center bg-red-500 w-20" for="menu-toggle">Menu</label>
            <ul class="flex absolute right-0 peer-checked:hidden flex-col mt-9 gap-1 px-5 bg-red-500">
                <li>Intro</li>
                <li>Career</li>
                <li>Portfolio</li>
            </ul>
        </div>
    </div>
</template>