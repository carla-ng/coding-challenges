<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="inputField">Username</label>
                <input type="text" id="inputField" v-model="inputValue" placeholder="How do you like people to call you?">
            </div>

            <div>
                <label for="conditions">I have read and agree to the Terms of service and Privacy policy</label>
                <input type="checkbox" id="conditions" v-model="agreeConditions">
            </div>

            <button type="submit">Continue</button>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const agreeConditions = ref(false)
const inputValue = ref('')

const submitForm = () => {
    if ( agreeConditions.value && inputValue.value.trim() !== '' ) {
        alert(`Form submitted with input: ${inputValue.value}`);
    }
}
</script>


<style lang="scss" scoped>

</style>