import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {

  const shopApp = ref(['Vue.js', 'HTML', 'CSS', 'Tailwind', 'Typescript', 'Axios'])
  const copySpecializationArray = ref<any[]>([])
  const hostingSelected = ref('')
  const ratingSelected = ref('')
  const vue = ref(false)
  const typescript = ref(false)
  const kotlin = ref(false)
  const mainFilterToggle = ref(true)


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

  function vueSelected() {
    if (vue.value === true) {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) =>
        item.frameworks.includes('Vue.js')
      );
    }
    else if (vue.value === false) {
      copySpecializationArray.value = specializationArray
    }
    else if (typescript.value === true) {
      typescriptSelected()
    }
    else if (kotlin.value === true) {
      kotlinSelected()
    }
    else if (hostingSelected.value.length > 0) {
      selectedHosting()
    }
    else if (ratingSelected.value.length > 0) {
      filterRating()
    }
  }

  function kotlinSelected() {
    if (kotlin.value === true) {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) =>
        item.frameworks.includes('Kotlin')
      );
    } else if (kotlin.value === false) {
      copySpecializationArray.value = specializationArray
    }
    else if (vue.value === true) {
      vueSelected()
    }
    else if (typescript.value === true) {
      typescriptSelected()
    }
    else if (hostingSelected.value.length > 0) {
      selectedHosting()
    }
    else if (ratingSelected.value.length > 0) {
      filterRating()
    }
  }

  function typescriptSelected() {
    if (typescript.value === true) {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) =>
        item.frameworks.includes('Typescript')
      );
    }
    else if (vue.value === true) {
      vueSelected()
    }
    else if (kotlin.value === true) {
      kotlinSelected()
    }
    else if (typescript.value === false) {
      copySpecializationArray.value = specializationArray
    }
    else if (hostingSelected.value.length > 0) {
      selectedHosting()
    }
    else if (ratingSelected.value.length > 0) {
      filterRating()
    }
  }

  function selectedHosting() {
    if (hostingSelected.value === 'Online') {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) => item.status === 'Online')
    }
    if (hostingSelected.value === 'Offline') {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) => item.status === 'Offline')
    }
    if (hostingSelected.value === 'Coming Soon') {
      copySpecializationArray.value = copySpecializationArray.value.filter((item) => item.status === 'Continues')
    }
  }

  function filterRating() {
    if (ratingSelected.value === 'High rating') {
      copySpecializationArray.value = copySpecializationArray.value.sort((a, b) => {
        const ratingA = parseFloat(a.numberOfLikes)
        const ratingB = parseFloat(b.numberOfLikes)

        if (ratingA < ratingB) {
          return 1
        }
        if (ratingA > ratingB) {
          return -1
        }
        return 0
      })
    }
    if (ratingSelected.value === 'Low rating') {
      copySpecializationArray.value = copySpecializationArray.value.sort((a, b) => {
        const ratingA = parseFloat(a.numberOfLikes)
        const ratingB = parseFloat(b.numberOfLikes)

        if (ratingA > ratingB) {
          return 1
        }
        if (ratingA < ratingB) {
          return -1
        }
        return 0
      })
    }
  }

  function clearAllFilters() {
    kotlin.value = false
    vue.value = false
    typescript.value = false
    ratingSelected.value = ''
    hostingSelected.value = ''
    copySpecializationArray.value = specializationArray
  }
  return {
    shopApp,
    specializationArray,
    copySpecializationArray,
    selectedHosting,
    hostingSelected,
    filterRating,
    ratingSelected,
    typescriptSelected,
    typescript,
    kotlinSelected,
    kotlin,
    vueSelected,
    vue,
    clearAllFilters,
    mainFilterToggle
  }
})