import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {

    state: () => ({
        selectedFilters: [],
    }),

    getters: {
        getActiveFilters( state ) {
            return state.selectedFilters
        }
    },

    actions: {
        addSelectedFilter( filter ) {
            if ( !this.selectedFilters.includes(filter) ) {
                this.selectedFilters.push(filter)
            }
        },

        removeSelectedFilter( filter ) {
            this.selectedFilters = this.selectedFilters.filter(
                ( elem ) => elem !== filter
            )
        },

        clearAllFilters() {
            this.selectedFilters = []
        }
    },

});


export const useJobsStore = defineStore('jobs', {
    state: () => ({
        jobsList: [],
    }),

    getters: {
        filteredJobs(state, getters, rootState) {
            const selectedFilters = rootState.filters.selectedFilters;

            console.log(selectedFilters)

            if ( selectedFilters.length === 0 ) {
                return state.jobsList;
            }

            return state.jobsList.filter(( job ) => {
                return selectedFilters.every(( filter ) => {
                    const result = job.languages.includes(filter) || job.role === filter || job.level === filter
                    console.log(result)
                    return result;
                });
            });
        },
    },

    actions: {
        async fetchJSON() {
            try {
                const response = await fetch('/src/assets/job-listings/json/jobs.json');

                if ( !response.ok ) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                console.log(data)

                this.jobsList = data;
            } catch ( error ) {
                console.error('Error fetching jobs JSON: ', error.message);
            }
        },
    },
});
