<template>

    <main id="job-listings" class="page">

        <img  v-if="isDesktop" class="jl_header" src="/src/assets/job-listings/img/bg-header-desktop.svg">
        <img v-else class="jl_header" src="/src/assets/job-listings/img/bg-header-mobile.svg">

        <JobListingsFilters />

        <div class="jl_list-container">
            <JobListingsCard v-for="job in jobsList" key="job.id" :job-info="job" />
        </div>

    </main>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import JobListingsCard from '../components/JobListingsCard.vue';
import JobListingsFilters from '../components/JobListingsFilters.vue';

const isDesktop = ref(window.innerWidth >= 768);
const updateWindowSize = () => isDesktop.value = window.innerWidth >= 768;
const jobsList = ref([])


// Fetch job listings from JSON
const fetchJSON = async() => {
    try {
        const response = await fetch('/src/assets/job-listings/json/jobs.json')

        if ( !response.ok ) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        jobsList.value = data
        //console.log(data)

    } catch( error ) {
        console.error('Error fetching jobs JSON: ', error.message)
    }
    
};


onMounted(() => {
    fetchJSON() // Get jobs listings
    window.addEventListener('resize', updateWindowSize)
});

onUnmounted(() => window.removeEventListener('resize', updateWindowSize));
</script>


<style lang="scss" scoped>
#job-listings {
    background-color: $jl-neutral-color-01;
    font-family: $jl-font-family;
    font-size: $jl-body-fontsize;

    .jl_header {
        background-color: $jl-primary-color-01;
        height: auto;
        width: 100%;

        @media ( max-width: $jl-breakpoint-max-mobile ) { max-height: 200px; }
    }

    .jl_list-container {
        display: flex;
        align-items: center;
        flex-direction: column;

        margin: 0 auto;
        max-width: 1000px;
        padding: 1.5rem 0;
        width: 100%;

        @media ( min-width: $jl-breakpoint-min-desktop ) {
            padding: 3rem 0;
        }
    }

}
</style>