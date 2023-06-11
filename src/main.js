import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/router'
import i18n from './i18n'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
