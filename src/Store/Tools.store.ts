import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToolsStore = defineStore('tools', () => {
    const eduArray = ref([
        {
            toolName: 'Javascript',
            image: ''
        }
        
    ])
    
    return {
        eduArray,
        
    }
})