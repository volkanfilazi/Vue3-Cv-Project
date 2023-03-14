<script setup lang="ts">
import { useSkillsStore } from '../Store/Skills.store'
import { Icon } from '@iconify/vue';


const skillsStore = useSkillsStore()

</script>
<template>
    <div class="flex flex-col w-full relative h-full gap-5 p-5">
        <div class="flex flex-col sm:flex-col h-full md:h-3/5 gap-5 md:flex-row md:justify-between">
            <div class="flex flex-col w-full sm:w-full text-white  border-[1px] border-t-yellow-400 border-l-yellow-400 md:w-1/2 h-full p-2">
                <h2 class="text-yellow-400 font-bold">Android Skills</h2>
                <div v-for="skills in skillsStore.androidSkills">
                    <div class="flex items-center gap-2">
                        <p class="w-[8px] h-[8px] bg-yellow-400 rounded-full"></p>
                        <p>{{ skills.skill }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full sm:w-full text-white border-[1px] border-r-yellow-400 border-b-yellow-400 md:w-1/2 h-full p-2">
                <h2 class="text-yellow-400 font-bold">Web Skills</h2>
                <div v-for="webSkill in skillsStore.webSkills">
                    <div class="flex items-center gap-2">
                        <p class="w-[8px] h-[8px] bg-yellow-400 rounded-full"></p>
                        <p>{{ webSkill }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>