import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {
  
    const shopApp = ref(['Vue.js','HTML','CSS','Tailwind','Typescript','Axios'])
    
    const specializationArray = [
      {
        status: 'Online',
        liked: false,
        name: 'Shop',
        image: 'guidance:shop',
        thema: 'Shop, Order, Filter System, Checkout, Networking',
        frameworks: 'Vue.js, HTML, CSS, Tailwind, Typescript',
        packages: '@iconify/vue, axios'
      },
      {
        status: 'Online',
        liked: false,
        name: 'Intelligence Square',
        image: 'carbon:ibm-watson-knowledge-studio',
        thema: 'Knowledge Competition, Multiple categories, Local Backend',
        frameworks: ' Vue.js, HTML, CSS, Tailwind',
        packages: '@iconify/vue'
      },
      {
        status: 'Online',
        liked: false,
        name: 'Second Cv',
        image: 'mdi:resume',
        thema: 'Resume, Tools, Languages, Specialization',
        frameworks: 'Vue.js, HTML, CSS, Tailwind, Typescript',
        packages: '@iconify/vue, vue-router, vite'
      },
      {
        status: 'Continues',
        liked: false,
        name: 'Encryption',
        image: 'carbon:ibm-cloud-hyper-protect-crypto-services',
        thema: 'Strengthen Passwords',
        frameworks: 'Vue.js, HTML, CSS, Tailwind',
        packages: '@iconify/vue, jwt, decode'
      },
      {
        status: 'Offline',
        liked: false,
        name: 'Desk Booking System',
        image: 'tabler:brand-booking',
        thema: 'Login System, Desk Reservation, Admin Panel, Offices , Desks, Users',
        frameworks: 'Vue.js, HTML, CSS, Tailwind',
        packages: '@iconify/vue, jwt, decode, axios, vite, vueuse-usestorage, iconify'
      }
    ]
    return {
      shopApp,
      specializationArray   
    }
})