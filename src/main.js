import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from "vue3-particles";


const pinia = createPinia()

createApp(App).use(Particles).use(pinia).mount('#app')
