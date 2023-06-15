import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {
  
    const shopApp = ref(['Vue.js','HTML','CSS','Tailwind','Typescript','Axios'])
    
    const specializationArray = [
      {
        name: 'Shop',
        image: 'guidance:shop',
        thema: 'Shop, Order, Filter System, Checkout, Networking',
        frameworks: 'Vue.js, HTML, CSS, Tailwind, Typescript',
        packages: '@iconify/vue, axios'
      },
      {
        name: 'Intelligence Square',
        image: 'carbon:ibm-watson-knowledge-studio',
        thema: 'Knowledge Competition, Multiple categories, Local Backend',
        frameworks: ' Vue.js, HTML, CSS, Tailwind',
        packages: '@iconify/vue'
      },
      {
        name: 'Encryption',
        image: 'carbon:ibm-cloud-hyper-protect-crypto-services',
        thema: 'Strengthen Passwords',
        frameworks: 'Vue.js, HTML, CSS, Tailwind',
        packages: '@iconify/vue, jwt, decode'
      }
    ]
    return {
      shopApp,
      specializationArray   
    }
})