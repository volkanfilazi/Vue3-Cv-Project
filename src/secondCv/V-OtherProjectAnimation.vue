<template>
  <div
    class="absolute transition-all duration-300 group hover:motion-safe:animate-spin flex items-center justify-center z-20 cursor-pointer p-1 text-white text-sm md:text-base w-16 h-16 text-center md:w-40 md:h-40 md:right-40 top-1 md:top-20 hover:border-yellow-400 border-[1px] border-dashed rounded-full">
    <p class="group-hover:text-yellow-400"><slot></slot></p>
  </div>
</template>