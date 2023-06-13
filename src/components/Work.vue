<script setup lang="ts">
import { useEducationStore } from '../Store/Education.store'

const educationStore = useEducationStore()
</script>
<template>
    <div class="z-10">
        <div class="flex flex-col sm:flex-col p-2 md:items-center gap-2 w-3/3">
            <div class="border-[1px] text-white md:w-[500px] min-h-[120px] text-sm p-2 rounded-md hover:border-yellow-400 border-l-yellow-400 border-r-yellow-400"
                v-for="work in educationStore.workArray">
                <p class="text-yellow-400">{{ work.date }}</p>
                <div class="h-3/3">
                    <p class="h-1/3">{{ work.shopName }}</p>
                    <p class="h-1/3">{{ work.title }}</p>
                    <p>{{ work.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>