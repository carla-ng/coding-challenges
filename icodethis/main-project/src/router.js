import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import UserAuthentication from './views/UserAuthentication.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user-authentication',
        name: 'UserAuthentication',
        component: UserAuthentication,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
