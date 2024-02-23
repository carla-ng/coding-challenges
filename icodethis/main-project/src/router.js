import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import UserAuthentication from './views/UserAuthentication.vue';
import Alarm from './views/Alarm.vue';

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
    {
        path: '/alarm',
        name: 'Alarm',
        component: Alarm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
