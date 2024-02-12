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
