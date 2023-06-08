import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/router'


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
