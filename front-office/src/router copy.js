// da rivedere completamente

import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/Contatti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chisiamo',
            name: 'ChiSiamo',
            component: ChiSiamo
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: Contatti
        },

        ]
});


export { router }
