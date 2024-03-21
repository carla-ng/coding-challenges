<template>
    <main id="music-player" class="page">
        <MusicPlayerCmp />
    </main>
</template>


<script setup>
import MusicPlayerCmp from '../components/MusicPlayerCmp.vue';
</script>


<style lang="scss" scoped>
#music-player {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #4A2B4B;
    font-family: $font-family-inter;
    font-size: 16px;
}
</style>