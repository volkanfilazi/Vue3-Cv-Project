import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from "vue3-particles";
import { MotionPlugin } from '@vueuse/motion'


const pinia = createPinia()

createApp(App).use(Particles).use(pinia).use(MotionPlugin).mount('#app')
