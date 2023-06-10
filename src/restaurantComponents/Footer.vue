<script setup lang="ts"></script>

<template>
  <div class="flex flex-col md:flex-row">
      <div
        class="flex flex-col md:flex-row md:w-full bg-[#471d6b] lg:w-5/6 md:p-3 gap-5 border-b-[1px] border-purple-400 md:justify-between md:items-center text-black font-bold">
        <div
          class="flex w-full md:w-1/6 p-2 md:justify-center cursor-pointer items-center">
          <h1 class="text-white font-bold text-[20px]">Volkan Filazi</h1>
        </div>

        <ul class="flex lg:w-1/6 justify-between px-2 md:justify-normal md:px-0 items-center text-white gap-3">
          <RouterLink to="/">Developer Page</RouterLink>

        </ul>
      </div>
    </div>
</template>