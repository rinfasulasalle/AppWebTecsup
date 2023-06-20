import { createRouter, createWebHistory } from 'vue-router';

import CmpCompactadora from './components/CmpCompactadora.vue';
import CmpOruga from './components/CmpOruga.vue';

const routes = [
    {
        path: '/',
        component: CmpCompactadora
    },
    {
        path: '/about',
        component: CmpOruga
    },
    ];
    const router = createRouter({
    history: createWebHistory(),
    routes
    });

export default router;
