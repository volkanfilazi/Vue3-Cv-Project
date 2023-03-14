<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
    <div class="z-10 h-full">
        <div class="flex flex-col items-center gap-10  h-full sm:flex-col w-3/3">
            <div class="flex flex-col sm:flex-col mt-5 md:mt-0 md:flex-row justify-center gap-10 ">
                <div class="border-[1px] border-l-yellow-400 border-t-yellow-400 p-5">
                    <Icon icon="ion:bicycle" color="white" width="200" height="200" />
                </div>
                <div class="border-[1px] p-5 border-t-yellow-400 border-r-yellow-400">
                    <Icon icon="ic:round-menu-book" color="white" width="200" height="200" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-col md:flex-row justify-center gap-10">
                <div class="border-[1px] p-5 border-l-yellow-400 border-b-yellow-400">
                    <Icon icon="icon-park-outline:code-computer" color="white" width="200" height="200" />

                </div>
                <div class="border-[1px] p-5 border-r-yellow-400 border-b-yellow-400">
                    <Icon icon="bxs:planet" color="white" width="200" height="200" />
                </div>
            </div>
        </div>
    </div>
</template>