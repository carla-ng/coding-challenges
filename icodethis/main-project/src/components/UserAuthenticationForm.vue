<template>
    <div class="user-authentication-form">
        <form class="ua-form" @submit.prevent="submitForm">
            <div class="ua-form_inviter">
                <img src="/img/portraitFemaleElf1.webp" alt="Inviter profile picture">
                <p class="ua-form_inviter-invitation">Flora invited you to join</p>
                <p class="ua-form_inviter-channel">The Fairy Channel</p>
                <ul>
                    <li>46k active fairies</li>
                    <li>78k total fairies</li>
                </ul>
            </div>

            <div class="ua-form_user-input">
                <label for="inputField">Username</label>
                <input type="text" id="inputField" v-model="inputValue" placeholder="How do you like people to call you?">
            </div>

            <div class="ua-form_conditions-checkbox">
                <input type="checkbox" id="conditions" v-model="agreeConditions">
                <label for="conditions">I have read and agree to the <a href="#">Terms of service</a> and <a href="#">Privacy policy</a></label>
            </div>

            <button type="submit" class="ua-form_submit-button" :class="{'disabled': !filledForm }">Continue</button>

            <a href="#" class="ua-form_account-link">Already have an account</a>
        </form>
    </div>
</template>


<script setup>
import { ref, watch } from 'vue'

const agreeConditions = ref(false)
const inputValue = ref('')
const filledForm = ref(false)

const submitForm = () => {
    if ( filledForm.value ) {
        alert(`Form submitted with input: ${inputValue.value}`);
    }
}

watch([agreeConditions, inputValue], ([agree, input]) => {
    filledForm.value = agree && input.trim() !== '';
});
</script>


<style lang="scss" scoped>
.user-authentication-form {
    background-color: $ua-base-color-02;
    border-radius: 20px;
    box-shadow: 0 0 10px $ua-accent-color-01;
    margin: 0 1.2rem;
    max-width: 415px;
    overflow: hidden;
    padding: 2rem;

    @media ( min-width: $breakpoint-min-desktop ) { padding: 2rem 3rem; }

    form.ua-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .ua-form_inviter {
            img {
                display: flex;
                border-radius: 50%;
                box-shadow: 0 0 10px $ua-accent-color-01;
                margin: 0 auto;
                max-width: 100px;
                width: 90%;

                @media ( min-width: $breakpoint-min-desktop ) {
                    max-width: 130px;
                }
            }

            .ua-form_inviter-invitation {
                font-size: 0.9rem;
                font-weight: $font-weight-montserrat-medium;
                margin-top: 1.3rem;
                text-align: center;
            }

            .ua-form_inviter-channel {
                color: $ua-accent-color-01;
                font-size: 1.3rem;
                font-weight: $font-weight-montserrat-bold;
                letter-spacing: 1px;
                margin-top: 1rem;
                text-align: center;
                text-shadow: 0px 1px 1px $ua-accent-color-02;
            }

            ul {
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
                padding: 0;

                @media ( min-width: $breakpoint-min-desktop ) {
                    flex-direction: row;
                }

                li {
                    font-size: 0.8rem;
                    font-weight: $font-weight-montserrat-medium;
                    padding: 0.1rem 0.5rem;
                    text-align: center;
                }
            }
        }

        .ua-form_user-input {
            display: flex;
            flex-direction: column;

            margin-top: 2rem;
            width: 100%;

            label {
                font-size: 0.9rem;
                font-weight: $font-weight-montserrat-medium;
            }

            input {
                background-color: lighten($ua-accent-color-01, 25%);
                border: none;
                border-radius: 6px;
                color: $ua-accent-color-02;
                font-family: $font-family-montserrat;
                font-size: 0.9rem;
                margin-top: 0.3rem;
                padding: 0.8rem;

                &:focus { border-color: $ua-accent-color-02; }

                &::placeholder {
                    color: lighten($ua-accent-color-02, 15%);
                    font-family: $font-family-montserrat;
                    font-size: 0.8rem;
                    font-style: italic;
                }
            }
        }

        .ua-form_conditions-checkbox {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;

            margin-top: 1.5rem;

            input {
                -webkit-appearance: none;
                appearance: none;
                background-color: lighten($ua-accent-color-01, 25%);
                border-radius: 6px;
                border: none;
                color: $ua-accent-color-02;
                font-size: 1rem;
                margin: 0;
                padding: 0;
                height: 1.4rem;
                width: 2rem;
                transform: translateY(-0.075rem);

                display: grid;
                place-content: center;

                &::before {
                    content: "";
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 2px;
                    transform: scale(0);
                    transition: 120ms transform ease-in-out;
                    box-shadow: inset 1rem 1rem $ua-accent-color-02;
                }

                &:checked::before {
                    transform: scale(1);
                }
            }

            label {
                font-size: 0.8rem;
                font-weight: $font-weight-montserrat-medium;
                margin-inline-start: 0.5rem;

                a {
                    color: $ua-accent-color-02;
                    font-weight: $font-weight-montserrat-bold;

                    &:hover, &:active {
                        color: darken($ua-accent-color-02, 10%);
                    }
                }
            }
        }

        button.ua-form_submit-button {
            background-color: $ua-accent-color-02;
            border: none;
            border-radius: 6px;
            color: $white;
            cursor: pointer;
            font-family: $font-family-montserrat;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-top: 2rem;
            padding: 0.8rem;
            width: 100%;

            &:hover, &:active {
                background-color: darken($ua-accent-color-02, 10%);
            }

            &.disabled { background-color: $ua-accent-color-01; }
        }

        a.ua-form_account-link {
            color: $ua-accent-color-02;
            font-size: 0.8rem;
            font-weight: $font-weight-montserrat-bold;
            margin-top: 0.6rem;

            &:hover, &:active {
                color: darken($ua-accent-color-02, 10%);
            }
        }
    }
}
</style>