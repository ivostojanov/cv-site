import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css' // Main CSS
import i18n from './assets/i18n/i18n' // Localization

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
