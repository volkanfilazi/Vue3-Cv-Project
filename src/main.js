import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from "vue3-particles";
import { MotionPlugin } from '@vueuse/motion'
import VolkiButton from 'volki-components'


const pinia = createPinia()

createApp(App).use(VolkiButton).use(Particles).use(pinia).use(MotionPlugin).mount('#app')
