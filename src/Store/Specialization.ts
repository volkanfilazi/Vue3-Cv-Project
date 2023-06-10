import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {
  
    const shopApp = ref(['Vue.js','HTML','CSS','Tailwind','Typescript','Axios'])
    
    return {
      shopApp,   
    }
})