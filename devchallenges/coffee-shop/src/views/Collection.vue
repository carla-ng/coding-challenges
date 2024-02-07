<template>
    <section id="collection" role="region" aria-label="Coffee Collection">
        <div class="collection_intro">
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>

        <nav class="collection_tabs" role="navigation" aria-label="Collection Filters To Know Availability">
            <ul role="menubar">
                <li @click="changeTab('all')" :class="{ active: activeTab === 'all' }" role="menuitem" :aria-current="activeTab === 'all' ? 'page' : null">
                    <span>All Products</span>
                </li>
                <li @click="changeTab('available')" :class="{ active: activeTab === 'available' }" role="menuitem" :aria-current="activeTab === 'available' ? 'page' : null">
                    <span>Available Now</span>
                </li>
            </ul>
        </nav>

        <div class="collection_products" role="list" aria-live="polite">
            <Card v-for="coffee in filteredCoffeeList" :key="coffee.id" :coffee-info="coffee" role="listitem" />
        </div>
    </section>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const apiUrl = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
const coffeeList = ref([])
const activeTab = ref('all')


// Fetch coffee listing data from API
const fetchCoffeeInfo = async () => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        coffeeList.value = data
    } catch ( error ) {
        console.log(error)
    }
}


// Change active tab
const changeTab = ( tab ) => activeTab.value = tab


// Filter coffee list (all / only available ) when changing active tab
const filteredCoffeeList = computed(() => {
    if ( activeTab.value === 'all' ) {
        return coffeeList.value
    } else if ( activeTab.value === 'available' ) {
        return coffeeList.value.filter(( coffee ) => coffee.available !== false)
    }
});


// Execute after component has been mounted 
onMounted (() => {
    fetchCoffeeInfo();  //fetch coffee info
});


</script>


<style lang="scss" scoped>
#collection {
    background-color: $base-color-01;
    border-radius: 12px;
    margin: 0 auto 30px auto;
    max-width: 1080px;
    padding: 1.5rem 0;
    width: 90%;

    @media (min-width: $breakpoint-min-sm) { width: 60%; }

    @media (min-width: $breakpoint-min-md) {
        padding: 1.5rem 2rem 4rem 2rem;
        width: 70%;
    }

    @media (min-width: $breakpoint-min-lg) { width: 85%; }

    .collection_intro {
        background-image: url('./src/assets/img/vector.svg');
        background-position: 165px 0px;
        background-repeat: no-repeat;
        background-size: 255px auto;

        margin: 0 auto;
        max-width: 100%;
        padding: 3rem 0 0 0;

        @media (max-width: $breakpoint-max-sm) { padding: 3rem 1rem 0 1rem; }

        @media (min-width: $breakpoint-min-md) {
            background-position: top right;
            max-width: 80%;
        }

        @media (min-width: $breakpoint-min-lg) { max-width: 50%; }

        p {
            margin: 0.5rem auto 0 auto;
            
            @media (max-width: $breakpoint-max-sm) { max-width: 91%; }
        }
    }

    .collection_tabs {
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            margin-top: 1.5rem;
            
            li {
                border-radius: 10px;
                cursor: pointer;
                margin: 0 8px;
                padding: 0.5rem 0.8rem;
                text-align: center;

                &.active { background-color: $base-color-03; }
            }
        }
    }

    .collection_products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1.5rem auto 0 auto;

        @media (min-width: $breakpoint-min-sm) { max-width: 80%; }

        @media (min-width: $breakpoint-min-md) {
            margin: 2.5rem auto 0 auto;
            max-width: 95%;
        }

        @media (min-width: $breakpoint-min-lg) { max-width: 90%; }

        .card {
            
            width: 100%;
            @media (min-width: $breakpoint-min-md) { width: calc(50% - 10px); }
            @media (min-width: $breakpoint-min-lg) { width: calc(33.33% - 10px); }
        }
    }
}
</style>