<template>
    <main id="alarm" class="page">
        <AlarmContainer />
    </main>
</template>


<script setup>
import AlarmContainer from '../components/AlarmContainer.vue';
</script>


<style lang="scss" scoped>
#alarm {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $al-base-color-01;
    font-family: $font-family-montserrat;
    font-size: 16px;
}
</style>