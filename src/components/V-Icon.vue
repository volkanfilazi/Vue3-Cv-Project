<script setup lang="ts"></script>
<template>
  <div class="group cursor-pointer h-[10px]">
    <div class="flex gap-[3px] group-hover:gap-1 transition-all duration-200 flex-col justify-end items-end">
      <div class="flex gap-[3px] group-hover:gap-1 transition-all duration-200">
        <div class="relative flex items-center">
          <div
            class="w-[6px] group-hover:bg-yellow-300 animate-ping transition-all duration-200 h-[6px] bg-yellow-400 border-gray-500">
          </div>
          <div
            class="w-[6px] group-hover:bg-yellow-300 absolute transition-all duration-200 h-[6px] bg-yellow-400 border-gray-500">
          </div>
        </div>
        <div class="w-[6px] group-hover:bg-red-300 transition-all duration-200  h-[6px] bg-gray-300"></div>
      </div>
      <div class="flex gap-[3px] group-hover:gap-1 transition-all duration-200">
        <div class="w-[6px] group-hover:bg-red-300 transition-all duration-200  h-[6px] bg-gray-300"></div>
        <div class="w-[6px] group-hover:bg-red-300 transition-all duration-200  h-[6px] bg-gray-300"></div>
      </div>
    </div>
  </div>
</template>
