import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
})

export default router