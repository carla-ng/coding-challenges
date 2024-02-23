<template>
    <nav v-if="isHomePage">
        <router-link to="/user-authentication">User Authentication</router-link>
        <router-link to="/alarm">Alarm</router-link>
    </nav>
    <router-view></router-view>
</template>


<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path === '/');
</script>


<style scoped>
nav {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 1rem 0;

    a { padding: 1rem; }
}
</style>
