// main.js
import { createApp } from 'vue'
import App from './App.vue'

const fetch_el = document.getElementById('app')

const mount = (el) => {
    const createVue = createApp(App)
    createVue.mount(el)
}

if (fetch_el) {
    mount(fetch_el)
}

export { mount }