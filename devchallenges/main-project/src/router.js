import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import MusicPlayerPage from './views/MusicPlayerPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/music-player',
        name: 'MusicPlayerPage',
        component: MusicPlayerPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
