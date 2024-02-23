<template>
    <section class="al-cmp">
        <header>
            <div class="al-cmp_go-back">B</div>
            <h1 class="al-cmp_title">Alarm</h1>
            <div class="al-cmp_settings">S</div>
        </header>

        <div class="al-cmp_time-container">
            <h2 class="al-cmp_time">4:59 PM</h2>
            <p class="al-cmp_date">3RD JANUARY</p>
        </div>

        <div class="al-cmp_alarms-container">
            <button class="al-cmp_add-new-alarm">+</button>
            <div class="al-cmp_alarm-list">
                <article class="al-cmp_alarm">
                    <div class="al-cmp_alarm-main">
                        <h3 class="al-cmp_alarm-time">7:30 pm</h3>
                        <button class="al-cmp_alarm-activate">-</button>
                    </div>
                    <div class="al-cmp_alarm-days">
                        <span>Su</span>
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss" scoped>
.al-cmp {
    background-color: $al-base-color-01;
    border-radius: 10px;
    box-shadow: 3px 5px 5px darken($al-base-color-02, 5%);
    margin: 1rem;
    overflow: hidden;

    header {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        padding: 1rem 2rem;

        .al-cmp_go-back {}
        h1.al-cmp_title {
            color: $al-base-color-03;
            font-size: 1rem;
            font-weight: $font-weight-montserrat-bold;
        }
        .al-cmp_settings {}
    }

    .al-cmp_time-container {
        padding: 1rem 2rem;
        text-align: center;
        h2.al-cmp_time {
            color: $al-base-color-03;
            font-size: 2rem;
            font-weight: $font-weight-montserrat-bold;
        }
        p.al-cmp_date {
            color: lighten($al-base-color-03, 5%);
            font-size: 0.85rem;
            font-weight: $font-weight-montserrat-medium;
        }
    }

    .al-cmp_alarms-container {
        background-color: $white;
        //transform: skewY(-15deg);
        padding: 1rem 2rem 2rem 2rem;

        button.al-cmp_add-new-alarm {
            //transform: skewY(15deg);
        }
        .al-cmp_alarm-list {
            //transform: skewY(15deg);
            article.al-cmp_alarm {
                .al-cmp_alarm-main {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    h3.al-cmp_alarm-time {
                        color: $al-accent-color-01;
                    }
                    button.al-cmp_alarm-activate {}
                }

                &.active-alarm {
                    .al-cmp_alarm-main {
                        h3.al-cmp_alarm-time {
                            color: $al-accent-color-02;
                            font-weight: $font-weight-montserrat-bold;
                        }

                        button.al-cmp_alarm-activate {}
                    }
                }

                .al-cmp_alarm-days {
                    width: 100%;
                    span {
                        color: $al-accent-color-01;
                        font-weight: $font-weight-montserrat-medium;
                        &.active-day { color: $al-accent-color-02; }
                    }
                }
            }
        }
    }
}
</style>