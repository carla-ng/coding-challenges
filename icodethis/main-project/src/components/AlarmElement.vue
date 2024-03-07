<template>
    <article class="al-cmp_alarm">
        <div class="al-cmp_alarm-main">
            <h3 class="al-cmp_alarm-time">7:30 pm</h3>
            <div class="al-cmp_alarm-activate">
                <div class="al-cmp_alarm-activate_toggle"></div>
            </div>
        </div>
        <div class="al-cmp_alarm-days">
            <span :class="{ 'active-day': isActive('Su') }" @click="toggleActive('Su')">Su</span>
            <span :class="{ 'active-day': isActive('Mo') }" @click="toggleActive('Mo')">Mo</span>
            <span :class="{ 'active-day': isActive('Tu') }" @click="toggleActive('Tu')">Tu</span>
            <span :class="{ 'active-day': isActive('We') }" @click="toggleActive('We')">We</span>
            <span :class="{ 'active-day': isActive('Th') }" @click="toggleActive('Th')">Th</span>
            <span :class="{ 'active-day': isActive('Fr') }" @click="toggleActive('Fr')">Fr</span>
            <span :class="{ 'active-day': isActive('Sa') }" @click="toggleActive('Sa')">Sa</span>
        </div>
    </article>
</template>


<script setup>
import { ref } from 'vue';

const activeDays = ref([]);


// Detect if alarm is active on a specific day
const isActive = ( day ) => activeDays.value.includes(day)


// Activate and deactivate the alarm for a specific day
const toggleActive = ( day ) => {
    // Remove the day if it's already active
    if ( isActive(day) ) {
        activeDays.value = activeDays.value.filter((d) => d !== day)

    // Add the day if it's not active
    } else {
        activeDays.value.push(day)
    }
}
</script>


<style lang="scss" scoped>
article.al-cmp_alarm {
    margin-top: 1.5rem;
    .al-cmp_alarm-main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        h3.al-cmp_alarm-time {
            color: lighten($al-base-color-03, 22%);
        }
        .al-cmp_alarm-activate {
            background-color: lighten($al-base-color-03, 22%);
            border-radius: 20px;
            cursor: pointer;
            height: 7px;
            position: relative;
            width: 40px;
            .al-cmp_alarm-activate_toggle {
                background-color: lighten($al-base-color-03, 22%);
                border-radius: 50%;
                height: 20px;
                left: 0;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 20px;
            }
        }
    }

    &.active-alarm {
        .al-cmp_alarm-main {
            h3.al-cmp_alarm-time {
                color: $al-accent-color-01;
                font-size: 1.3rem;
                font-weight: $font-weight-montserrat-bold;
            }

            .al-cmp_alarm-activate {
                .al-cmp_alarm-activate_toggle {
                    background-color: $al-accent-color-01;
                }
            }
        }
    }

    .al-cmp_alarm-days {
        margin-top: 0.1rem;
        width: 100%;

        span {
            color: lighten($al-base-color-03, 22%);
            cursor: pointer;
            font-size: 1rem;
            font-weight: $font-weight-montserrat-bold;
            padding: 0 0.3rem;
            user-select: none;

            &:first-child { padding-left: 0; }
            &:last-child { padding-right: 0; }
            &.active-day { color: $al-accent-color-01; }
        }
    }
}
</style>