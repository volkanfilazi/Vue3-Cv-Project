<script setup lang="ts"></script>
<template>
  <div class="flex w-full z-[100] md:px-40 fixed md:z-40 bg-yellow-400 justify-end text-black font-bold">
    <div class="hidden pb-2 pt-2 sm:hidden md:flex md:justify-between md:w-full md:items-center">

      <div class="flex flex-col justify-center items-center">
        <div class="w-[160px] flex justify-end">
          <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-black"></div>
        </div>
        <h1 class="text-black font-bold text-[20px]">Volkan Filazi</h1>
        <div class="w-[160px] flex justify-start">
          <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-black"></div>
        </div>
      </div>

      <ul class="flex gap-2">
        <a class="scroll-smooth cursor-pointer hover:bg-white hover:transition-all hover:duration-300 p-1"
          href="#intro">Intro</a>
        <a class="scroll-smooth cursor-pointer transition-all duration-700 hover:bg-white hover:transition-all hover:duration-300 p-1"
          href="#skills">Skills</a>
        <a class="scroll-smooth cursor-pointer hover:bg-white hover:transition-all hover:duration-300 p-1"
          href="#projects">Projects</a>
      </ul>
    </div>
    <div class="flex flex-col md:hidden text-black">
      <input type="checkbox" id="menu-toggle" class="relative sr-only peer" checked>
      <label class="text-center  w-20" for="menu-toggle">Menu</label>
      <ul class="flex absolute right-0 peer-checked:hidden flex-col mt-6 text-black gap-1 px-5 bg-yellow-400">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
a {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}

html {
  scroll-behavior: smooth;
}</style>