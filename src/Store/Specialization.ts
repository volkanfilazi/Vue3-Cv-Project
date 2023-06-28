import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {
  
    const shopApp = ref(['Vue.js','HTML','CSS','Tailwind','Typescript','Axios'])
    const copySpecializationArray = ref<any[]>([])
    const specializationArray = [
      {
        status: 'Online',
        liked: false,
        numberOfLikes: 50,
        name: 'Shop',
        image: 'guidance:shop',
        thema: 'Shop, Order, Filter System, Checkout, Networking',
        frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind', 'Typescript'],
        packages: '@iconify/vue, axios'
      },
      {
        status: 'Online',
        liked: false,
        numberOfLikes: 28,
        name: 'Intelligence Square',
        image: 'carbon:ibm-watson-knowledge-studio',
        thema: 'Knowledge Competition, Multiple categories, Local Backend',
        frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
        packages: '@iconify/vue'
      },
      {
        status: 'Offline',
        liked: false,
        numberOfLikes: 12,
        name: 'Desk Booking System',
        image: 'tabler:brand-booking',
        thema: 'Login System, Desk Reservation, Admin Panel, Offices , Desks, Users',
        frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
        packages: '@iconify/vue, jwt, decode, axios, vite, vueuse-usestorage, iconify'
      },
      {
        status: 'Continues',
        liked: false,
        numberOfLikes: 5,
        name: 'Encryption',
        image: 'carbon:ibm-cloud-hyper-protect-crypto-services',
        thema: 'Strengthen Passwords',
        frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
        packages: '@iconify/vue, jwt, decode'
      },
      {
        status: 'Continues',
        liked: false,
        numberOfLikes: 20,
        name: 'Second Cv',
        image: 'mdi:resume',
        thema: 'Resume, Tools, Languages, Specialization',
        frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind', 'Typescript'],
        packages: '@iconify/vue, vue-router, vite'
      },
      {
        status: 'Offline',
        liked: false,
        numberOfLikes: 32,
        name: 'Codagram',
        image: 'mdi:resume',
        thema: 'Fake Instagram, Firebase Login System',
        frameworks: ['Kotlin'],
        packages: 'retrofit, firebase'
      }
    ]

    copySpecializationArray.value = specializationArray
    return {
      shopApp,
      specializationArray,
      copySpecializationArray   
    }
})