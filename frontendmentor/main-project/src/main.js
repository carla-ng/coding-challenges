import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import '/src/assets/styles/global.scss'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
