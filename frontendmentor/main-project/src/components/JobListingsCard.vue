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
    flex-direction: column;
    justify-content: space-between;

    background-color: $white;
    border-radius: 5px;
    box-shadow: 5px 5px 20px darken($jl-neutral-color-02, 15%);
    margin: 2rem 0;
    padding: 1.5rem 1rem;
    width: 85%;

    border-left: 5px solid $white;
    &.new-job { border-left: 5px solid $jl-primary-color-01; }

    
    @media ( min-width: $jl-breakpoint-min-desktop ) {
        align-items: center;
        flex-direction: row;

        margin: 1rem 0;
        padding: 1.2rem 2rem;
        width: 100%;
    }

    .jl-card_main-info {
        display: flex;
        flex-direction: column;

        @media ( max-width: $jl-breakpoint-max-mobile ) {
            margin-top: -3.5rem;
        }

        @media ( min-width: $jl-breakpoint-min-desktop ) {
            flex-direction: row;
        }

        .jl-card_logo-container {
            img {
                width: 25%;
                @media ( min-width: $jl-breakpoint-min-desktop ) { width: 100%; }
            }
        }

        .jl-card_info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 1rem 0;

            @media ( max-width: $jl-breakpoint-max-mobile ) {
                border-bottom: 1px solid lighten($jl-neutral-color-03, 30%);
            }

            @media ( min-width: $jl-breakpoint-min-desktop ) {
                padding: 0 1rem;
            }

            .jl-card_info-company {

                .jl-card_name {
                    color: $jl-primary-color-01;
                    font-size: 1rem;
                    font-weight: $jl-font-weight-bold;

                    @media ( min-width: $jl-breakpoint-min-desktop ) {
                        font-size: 0.9rem;
                    }
                }

                .jl-card_new {
                    background-color: $jl-primary-color-01;
                    border-radius: 20px;
                    color: $white;
                    font-size: 0.8rem;
                    font-weight: $jl-font-weight-medium;
                    margin-inline-start: 0.8rem;
                    line-height: 0.7rem;
                    padding: 0.4rem 0.5rem 0.3rem 0.5rem;

                    @media ( min-width: $jl-breakpoint-min-desktop ) { font-size: 0.7rem; }
                }

                .jl-card_featured {
                    background-color: $black;
                    border-radius: 20px;
                    color: $white;
                    font-size: 0.8rem;
                    font-weight: $jl-font-weight-medium;
                    margin-inline-start: 0.3rem;
                    line-height: 0.7rem;
                    padding: 0.4rem 0.5rem 0.3rem 0.5rem;

                    @media ( min-width: $jl-breakpoint-min-desktop ) { font-size: 0.7rem; }
                }
            }

            h1 {
                color: $black;
                cursor: pointer;
                font-size: 1rem;
                font-weight: $jl-font-weight-bold;
                margin-top: 1rem;
                user-select: none;

                &:hover { color: $jl-primary-color-01; }

                @media ( min-width: $jl-breakpoint-min-desktop ) {
                    font-size: 1.5rem;
                    margin-top: 0.7rem;
                }
            }

            ul.jl-card_info-list {
                display: flex;
                margin-top: 1rem;

                @media ( min-width: $jl-breakpoint-min-desktop ) { margin-top: 0.5rem; }

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

            @media ( max-width: $jl-breakpoint-max-mobile ) {
                flex-wrap: wrap;
            }

            li {
                background-color: $jl-neutral-color-01;
                border-radius: 5px;
                color: $jl-primary-color-01;
                cursor: pointer;
                font-size: 1rem;
                padding: 0.6rem 0.6rem 0.5rem 0.6rem;

                &:not(:last-child) {
                    margin-inline-end: 1rem;
                }

                &:hover, &:active {
                    background-color: $jl-primary-color-01;
                    color: $white;
                }

                @media ( max-width: $jl-breakpoint-max-mobile ) {
                    margin-top: 1rem;
                }

                @media ( min-width: $jl-breakpoint-min-desktop ) {
                    font-size: 0.9rem;
                    padding: 0.4rem 0.4rem 0.3rem 0.4rem;
                }
            }
        }
    }
}
</style>