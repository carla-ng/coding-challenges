<template>
    <article class="card">
        <div class="card__image-container">
            <img class="card__image-img" src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg" alt="Cappuccino">
            <span class="card__image-tag">Popular</span>
        </div>

        <div class="card__info-container">
            <span class="card__name">Cappuccino</span>
            <span class="card__price"></span>
        </div>

        <div class="card__rating-container">
            <!-- <img class="card__rating-svg" src="" alt="Rating available"> -->
            <span class="card__rating-value">4.7</span>
            <span class="card__rating-votes">(65 votes)</span>
        </div>
    </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    .card__image-container {
        .card__image-img {}
        .card__image-tag {}
    }

    .card__info-container {
        .card__name {}
        .card__price {}
    }

    .card__rating-container {
        .card__rating-svg {}
        .card__rating-value {}
        .card__rating-votes {}
    }
}
</style>