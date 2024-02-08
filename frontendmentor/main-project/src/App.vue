<template>
    <nav v-if="isHomePage">
        <router-link to="/job-listings">Job Listings with filters</router-link>
        <router-view></router-view>
    </nav>
</template>


<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path === '/');
</script>


<style scoped></style>
