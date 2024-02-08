import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import JobListings from './views/JobListings.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/job-listings',
        name: 'JobListings',
        component: JobListings,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
