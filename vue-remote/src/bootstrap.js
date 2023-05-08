// main.js
import { createApp } from 'vue'
import App from './App.vue'

const el = document.getElementById('app')

const mount = (el) => {
    const createVue = createApp(App)
    
    createVue.mount(el)
}

if (el) {
    mount(el)
}

export { mount }