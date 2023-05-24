<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
  <div id="specialization" class="flex p-2 md:p-0 flex-col mt-20 w-full items-center justify-center relative h-screen gap-5">
    <div class="flex flex-col p-5 justify-center items-center">
      <div class="w-[300px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[30px]">My Specialization</h1>
      <div class="w-[300px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>
    <div class="w-full md:w-4/5 text-white h-full md:h-1/2 gap-2 flex justify-between">

      <div
        class="group border-[1px] border-yellow-400 md:border-[0px] w-full md:w-1/3 items-center justify-center flex flex-col shadow-md shadow-black hover:shadow-none">
        <div
          class="text-center md:group-hover:mb-10 border-b-[1px] md:border-b-[0px] bg-[#21214d] md:group-hover:bg-black md:border-t-[1px] md:border-l-[1px] md:border-r-[1px] md:group-hover:border-b-[1px] border-yellow-400 h-1/2 w-full hover:bg-black transition-all duration-500">
          <p class="mt-5 md:group-hover:text-yellow-400">MOBILE CODING</p>
          <div class="flex h-full justify-between items-center ">
            <Icon class="w-full text-white group-hover:text-yellow-400 transition-all duration-500" icon="streamline:programming-browser-code-2-code-browser-tags-angle-programming-bracket" width="96" height="96" />  
          </div>
        </div>
        <div class="flex flex-col md:flex-row h-1/2 items-center w-full">
          <div
            class="w-full md:w-full bg-[#21214d] md:border-b-[1px] md:group-hover:bg-black md:group-hover:text-yellow-400 md:border-[1px] border-yellow-400 text-center h-full hover:bg-black hover:text-yellow-400 transition-all duration-500">
            <p class="h-1/4 mt-5">FRONTEND</p>
            <ul class="h-full">
              <li class="h-1/4">Java</li>
              <li class="h-1/4">Kotlin</li>
              <li class="h-1/4">XML</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="group w-full border-[1px] border-yellow-400 md:border-[0px] md:w-1/3 items-center justify-center flex flex-col shadow-md shadow-black hover:shadow-none">
        <div
          class="text-center md:group-hover:mb-10 border-b-[1px] md:border-b-[0px] bg-[#21214d] md:group-hover:bg-black md:border-t-[1px] md:border-l-[1px] md:border-r-[1px] md:group-hover:border-b-[1px] border-yellow-400 h-1/2 w-full hover:bg-black transition-all duration-500">
          <p class="mt-5 md:group-hover:text-yellow-400">WEB DESIGN</p>
          <div class="flex flex-col h-full md:flex-row md:justify-between items-center">
            <Icon class="w-1/2 text-white md:group-hover:text-yellow-400 transition-all duration-500" icon="streamline:programming-browser-code-2-code-browser-tags-angle-programming-bracket" width="96" height="96" />
            <Icon class="w-1/2 text-white md:group-hover:text-yellow-400 transition-all duration-500" icon="material-symbols:settings" width="96" height="96" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row h-1/2 items-center w-full">
          <div
            class="w-full md:group-hover:mr-10 md:w-1/2 bg-[#21214d] border-b-[1px] md:group-hover:bg-black md:group-hover:text-yellow-400 md:border-[1px] border-yellow-400 text-center h-full hover:bg-black hover:text-yellow-400 transition-all duration-500">
            <p class="h-1/4 md:mt-5">FRONTEND</p>
            <ul class="h-full">
              <li class="h-1/4">Vue3.js</li>
              <li class="h-1/4">Tailwind</li>
              <li class="h-1/4">CSS</li>
            </ul>
          </div>
          <div
            class="w-full md:w-1/2 bg-[#21214d] h-full text-center md:border-t-[1px] md:group-hover:bg-black md:group-hover:text-yellow-400 md:border-r-[1px] md:border-b-[1px] group-hover:border-l-[1px] border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all duration-500">
            <p class="h-1/4 md:mt-5">BACKEND</p>
            <ul class="h-full">
              <li class="h-1/4">Node.js</li>
              <li class="h-1/4">Express</li>
              <li class="h-1/4">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>