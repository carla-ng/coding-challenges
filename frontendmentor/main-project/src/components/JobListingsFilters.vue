<template>

    <section v-show="filters.length > 0" class="jl-filters">
        <ul>
            <li v-for="(filter, index) in filters" :key="index">
                <span>{{ filter }}</span>
                <span @click="removeFilter(filter)">X</span>
            </li>
        </ul>
        <button @click="clearFilters">Clear</button>
    </section>

</template>


<script setup>
import { computed } from 'vue'
import { useFiltersStore } from '../store/jobListingsStore'

const { removeSelectedFilter, clearAllFilters } = useFiltersStore()


// Returns list of selected filters in store
const filters = computed(() => {
    return useFiltersStore().selectedFilters
});


// Remove filter from list of selected filters in store
const removeFilter = ( filter ) => {
    removeSelectedFilter( filter )
}


// Clear list of selected filters in store
const clearFilters = () => {
    clearAllFilters()
}

</script>


<style lang="scss" scoped>
.jl-filters {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: $white;
    border-radius: 5px;
    box-shadow: 0 5px 20px darken($jl-neutral-color-02, 15%);
    margin: -40px auto 0 auto;
    max-width: 1000px;
    padding: 1rem;
    position: relative;
    width: 85%;
    z-index: 1;

    @media ( min-width: $jl-breakpoint-min-desktop ) {
        margin: -30px auto 0 auto;
        padding: 1rem 2rem;
        width: 95%;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        li {
            cursor: pointer;
            display: flex;
            margin: 0.5rem 0;
            -webkit-tap-highlight-color: transparent;

            &:not(:last-child) {
                margin-inline-end: 1rem;
            }

            span {
                &:first-child {
                    background-color: $jl-neutral-color-01;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    color: $jl-primary-color-01;
                    font-size: 1rem;
                    font-weight: $jl-font-weight-bold;
                    padding: 0.7rem 0.7rem 0.5rem 0.7rem;

                    @media ( min-width: $jl-breakpoint-min-desktop ) {
                        //font-size: 1rem;
                    }
                }

                &:nth-child(2) {
                    background-color: $jl-primary-color-01;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    color: $white;
                    font-size: 1.1rem;
                    font-weight: $jl-font-weight-bold;
                    padding: 0.7rem 0.7rem 0.5rem 0.7rem;

                    &:hover, &:active {
                        background-color: $black;
                    }
                }
                
            }
        }
    }

    button {
        background-color: transparent;
        border: none;
        color: $jl-neutral-color-03;
        cursor: pointer;
        font-family: $jl-font-family;
        font-size: 1rem;
        font-weight: $jl-font-weight-bold;
        -webkit-tap-highlight-color: transparent;

        &:hover, &:active {
            color: $jl-primary-color-01;
            text-decoration: underline;
        }

        @media ( min-width: $jl-breakpoint-min-desktop ) {
            font-size: 1.1rem;
        }
    }
}
</style>