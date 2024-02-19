<template>
    <main id="user-authentication" class="page">
        <UserAuthenticationForm />
    </main>
</template>


<script setup>
import UserAuthenticationForm from '../components/UserAuthenticationForm.vue';
</script>


<style lang="scss" scoped>
#user-authentication {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $ua-base-color-01;
    font-family: $ua-font-family;
    font-size: 16px;
}
</style>