<template>
    <section id="collection">
        <div class="collection_intro">
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>

        <nav class="collection_tabs">
            <ul>
                <li class="active">All Products</li>
                <li>Available Now</li>
            </ul>
        </nav>

        <div class="collection_products">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
</template>


<script setup>
import Card from '../components/Card.vue'
</script>


<style lang="scss" scoped>
#collection {
    background-color: $base-color-01;
    border-radius: 12px;
    margin: 0 auto;
    max-width: 1080px;
    padding: 1.5rem 0;
    width: 90%;

    @media (min-width: $breakpoint-min-sm) { width: 56%; }

    @media (min-width: $breakpoint-min-md) {
        padding: 1.5rem 2rem;
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

        p { margin-top: 0.5rem; }
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
                &.active { background-color: $base-color-03; }
            }
        }
    }

    .collection_products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2.5rem;

        .card {
            width: 100%;
            @media (min-width: $breakpoint-min-md) { width: calc(50% - 10px); }
            @media (min-width: $breakpoint-min-lg) { width: calc(33.33% - 10px); }
        }
    }
}
</style>