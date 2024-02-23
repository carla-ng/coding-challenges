<template>
    <main id="alarm" class="page">
        <AlarmForMobile />
    </main>
</template>


<script setup>
import AlarmForMobile from '../components/AlarmForMobile.vue';
</script>


<style lang="scss" scoped>
#alarm {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $al-base-color-02;
    font-family: $font-family-montserrat;
    font-size: 16px;
}
</style>