<script setup lang="ts">
import { useEducationStore } from '../Store/Education.store'

const educationStore = useEducationStore()
</script>
<template>
    <div class="z-10">
        <div class="flex flex-col sm:flex-col items-center p-2 gap-2 w-3/3">
            <div class="border-[1px] border-l-yellow-400 border-r-yellow-400 p-2 text-white md:w-[500px] min-h-[120px] text-sm rounded-md"
                v-for="education in educationStore.eduArray">
                <p class="text-yellow-400">{{ education.date }}</p>
                <div>
                    <p>{{ education.schoolName }}</p>
                    <p>{{ education.title }}</p>
                    <p>{{ education.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>