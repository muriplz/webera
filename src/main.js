import './assets/main.css'

import enMessages from '../i18n/en_en.json'
import esMessages from '../i18n/es_es.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {createI18n} from "vue-i18n";

const browserLanguage = navigator.language.split('-')[0];
const savedLanguage = localStorage.getItem('language') || browserLanguage || 'en';

export const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en: enMessages,
        es: esMessages
    }
})

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
