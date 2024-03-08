<template>
    <article class="al-cmp_alarm">
        <div class="al-cmp_alarm-main">
            <h3 class="al-cmp_alarm-time">{{ time }}</h3>
            <div class="al-cmp_alarm-activate" @click="toggleActiveAlarm">
                <div class="al-cmp_alarm-activate_toggle"></div>
            </div>
        </div>
        <div class="al-cmp_alarm-days">
            <span :class="{ 'active-day': isActiveDay('Su') }" @click="toggleActiveDay('Su')">Su</span>
            <span :class="{ 'active-day': isActiveDay('Mo') }" @click="toggleActiveDay('Mo')">Mo</span>
            <span :class="{ 'active-day': isActiveDay('Tu') }" @click="toggleActiveDay('Tu')">Tu</span>
            <span :class="{ 'active-day': isActiveDay('We') }" @click="toggleActiveDay('We')">We</span>
            <span :class="{ 'active-day': isActiveDay('Th') }" @click="toggleActiveDay('Th')">Th</span>
            <span :class="{ 'active-day': isActiveDay('Fr') }" @click="toggleActiveDay('Fr')">Fr</span>
            <span :class="{ 'active-day': isActiveDay('Sa') }" @click="toggleActiveDay('Sa')">Sa</span>
        </div>
    </article>
</template>


<script setup>
import { ref } from 'vue';

const props = defineProps({
  time: String
})

const activeDays = ref([]);


// Detect if alarm is active on a specific day
const isActiveDay = ( day ) => activeDays.value.includes(day)


// Activate and deactivate the alarm for a specific day
const toggleActiveDay = ( day ) => {
    // Remove the day if it's already active
    if ( isActiveDay(day) ) {
        activeDays.value = activeDays.value.filter((d) => d !== day)

    // Add the day if it's not active
    } else {
        activeDays.value.push(day)
    }
}


// Activate and deactivate an alarm
const toggleActiveAlarm = ( event ) => {
    const clickedElement = event.target
    const alarmContainer = clickedElement.closest(".al-cmp_alarm")

    if ( alarmContainer && alarmContainer.classList.contains("active-alarm") ) {
        alarmContainer.classList.remove("active-alarm")
    } else {
        alarmContainer.classList.add("active-alarm")
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
                transition: all 0.5s ease-out;
                width: 20px;
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
            &.active-day { color: lighten($al-accent-color-01, 45%); }
        }
    }

    &.active-alarm {
        .al-cmp_alarm-main {
            h3.al-cmp_alarm-time {
                color: $al-accent-color-01;
                font-weight: $font-weight-montserrat-bold;
            }

            .al-cmp_alarm-activate {
                .al-cmp_alarm-activate_toggle {
                    background-color: $al-accent-color-01;
                    left: auto;
                    right: 0;
                }
            }
        }

        .al-cmp_alarm-days {
            span {
                &.active-day { color: $al-accent-color-01; }
            }
        }
    }
}
</style>