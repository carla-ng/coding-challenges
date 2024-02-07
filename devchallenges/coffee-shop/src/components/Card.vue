<template>
    <section class="card loading" :aria-labelledby="'product-title-' + coffeeInfo.id">
        <div class="card__image-container">
            <img class="card__image-img" :src="coffeeInfo.image" :alt="'Photo of our ' + coffeeInfo.name + ' beverage'" @load="handleImageLoad" @error="handleImageLoad">
            <span v-show="coffeeInfo.popular" class="card__image-tag">Popular</span>
        </div>

        <div class="card__info-container">
            <span class="card__name" :id="'product-title-' + coffeeInfo.id">{{ coffeeInfo.name }}</span>
            <span class="card__price">{{ coffeeInfo.price }}</span>
        </div>

        <div class="card__rating-container" :aria-label="'Product Rating Information of ' + coffeeInfo.name">
            <div v-if="coffeeInfo.rating" >
                <img class="card__rating-svg" :src="svgStarFilled" alt="Rating available">
                <span class="card__rating-value">{{ coffeeInfo.rating }}</span>
                <span class="card__rating-votes">({{ coffeeInfo.votes }} votes)</span>
            </div>
            
            <div v-else>
                <img class="card__rating-svg" :src="svgStarEmpty" alt="Rating not available">
                <span class="card__rating-votes">No ratings</span>
            </div>

            <div v-show="!coffeeInfo.available" class="card__rating-soldout">Sold out</div>
        </div>

    </section>
</template>


<script setup>
import svgStarFilled from '/src/assets/img/Star_fill.svg'
import svgStarEmpty from '/src/assets/img/Star.svg'


// Props definition
const props = defineProps({
    coffeeInfo: Object,
});


// Show Card when image is loaded
const handleImageLoad = () => {
    const loadingCard = document.getElementsByClassName('loading')
    for ( let i = 0; i < loadingCard.length; i++ ) {
        loadingCard[i].classList.remove('loading')
    }
};


</script>


<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;

    margin: 1rem 0;
    padding: 0 20px;
    transition: opacity 0.5s ease-in-out;
    width: 100%;

    &.loading { opacity: 0; }

    .card__image-container {
        position: relative;

        .card__image-img {
            border-radius: 15px;
            max-width: 100%;
            width: 100%;
        }
        .card__image-tag {
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;

            background-color: $accent-color-03;
            border-radius: 10px;
            color: $base-color-01;
            font-size: $fontsize-small-text;
            padding: 0.2rem 0.7rem;
        }
    }

    .card__info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.3rem;

        .card__name {
            color: $accent-color-02;
            font-size: $fontsize-label;
        }

        .card__price {
            background-color: $accent-color-01;
            border-radius: 5px;
            color: $base-color-01;
            font-size: $fontsize-price-text;
            padding: 0.2rem 0.4rem;
        }
    }

    .card__rating-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.2rem;

        & > div {
            display: flex;
            align-items: center;
            flex-direction: row;

            .card__rating-svg { padding-right: 0.3rem; }
            .card__rating-value {
                color: $accent-color-02;
                font-size: $fontsize-price-text;
                padding-right: 0.3rem;
            }
            .card__rating-votes {
                color: $base-color-03;
                font-size: $fontsize-price-text;
            }
        }

        .card__rating-soldout {
            color: $accent-color-04;
            font-size: $fontsize-price-text;
        }
    }
}
</style>