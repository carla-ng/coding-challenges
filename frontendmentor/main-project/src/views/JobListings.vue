<template>
    <main id="job-listings" class="page">
        <img  v-if="isDesktop" class="job-listings_header" src="/src/assets/job-listings/img/bg-header-desktop.svg">
        <img v-else class="job-listings_header" src="/src/assets/job-listings/img/bg-header-mobile.svg">
    </main>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isDesktop = ref(window.innerWidth >= 768);
const updateWindowSize = () => isDesktop.value = window.innerWidth >= 768;

onMounted(() => window.addEventListener('resize', updateWindowSize));
onUnmounted(() => window.removeEventListener('resize', updateWindowSize));
</script>


<style lang="scss" scoped>
#job-listings {
    background-color:  $jl-neutral-color-01;

    .job-listings_header {
        background-color: $jl-primary-color-01;
        height: auto;
        width: 100%;
        
        @media (min-width: $jl-breakpoint-min-desktop) {
            
        }

    }

}
</style>