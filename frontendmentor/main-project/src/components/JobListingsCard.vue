<template>

    <section class="jl-card" :class="{ 'new-job': jobInfo.new }">

        <div class="jl-card_main-info">
            <div class="jl-card_logo-container">
                <img :src="jobInfo.logo" :alt="jobInfo.company + ' logo'">
            </div>
            <div class="jl-card_info-container">
                <div class="jl-card_info-company">
                    <span class="jl-card_name">{{ jobInfo.company }}</span>
                    <span class="jl-card_new" v-show="jobInfo.new">NEW!</span>
                    <span v-show="jobInfo.featured" class="jl-card_featured">FEATURED</span>
                </div>
                <h1>{{ jobInfo.position }}</h1>
                <ul class="jl-card_info-list">
                    <li>{{ jobInfo.postedAt }}</li>
                    <li>{{ jobInfo.contract }}</li>
                    <li>{{ jobInfo.location }}</li>
                </ul>
            </div>
        </div>

        <div class="jl-card_tags-section">
            <ul>
                <li>{{ jobInfo.role }}</li>
                <li>{{ jobInfo.level }}</li>
                <li v-if="jobInfo.languages" v-for="language in jobInfo.languages">{{ language }}</li>
            </ul>
        </div>

    </section>

</template>


<script setup>
// Props definition
const props = defineProps({
    jobInfo: Object,
});
</script>


<style lang="scss" scoped>
.jl-card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: $white;
    border-radius: 5px;
    margin: 1rem 0;
    padding: 2rem;
    width: 100%;

    border-left: 5px solid $white;
    &.new-job { border-left: 5px solid $jl-primary-color-01; }

    .jl-card_main-info {
        display: flex;

        .jl-card_logo-container {
            // img {}
        }

        .jl-card_info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 0 1rem;

            .jl-card_info-company {

                .jl-card_name {
                    color: $jl-primary-color-01;
                    cursor: pointer;
                    font-size: 0.9rem;
                    font-weight: $jl-font-weight-bold;
                }

                .jl-card_new {
                    background-color: $jl-primary-color-01;
                    border-radius: 20px;
                    color: $white;
                    font-size: 0.7rem;
                    font-weight: $jl-font-weight-medium;
                    margin-left: 0.8rem;
                    line-height: 0.7rem;
                    padding: 0.3rem 0.5rem;
                }

                .jl-card_featured {
                    background-color: $black;
                    border-radius: 20px;
                    color: $white;
                    font-size: 0.7rem;
                    font-weight: $jl-font-weight-medium;
                    margin-left: 0.3rem;
                    line-height: 0.7rem;
                    padding: 0.3rem 0.5rem;
                }
            }

            h1 {
                color: $black;
                font-size: 1.5rem;
                font-weight: $jl-font-weight-bold;
                margin-top: 0.7rem;

                &:hover { color: $jl-primary-color-01; }
            }

            ul.jl-card_info-list {
                display: flex;
                margin-top: 0.5rem;

                li {
                    color: $jl-neutral-color-03;
                    font-size: 1rem;
                    font-weight: $jl-font-weight-medium;

                    &:not(:last-child) {
                        padding-inline-end: 0.5rem;

                        &::after {
                            content: "";
                            background:  $jl-neutral-color-03;
                            border-radius: 50%;
                            display: inline-block;
                            height: 3px;
                            margin-inline-start: 0.4rem;
                            vertical-align: middle;
                            width: 3px;
                        }
                    }
                }
            }
        }
    }

    .jl-card_tags-section {
        ul {
            display: flex;
            // li {}
        }
    }
}
</style>