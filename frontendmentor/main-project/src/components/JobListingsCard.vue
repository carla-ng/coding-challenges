<template>

    <section class="jl-card" :class="{ 'new-job': jobInfo.new }">

        <div class="jl-card_main-info">
            <div>
                <img :src="jobInfo.logo" :alt="jobInfo.company + ' logo'">
            </div>
            <div>
                <div>
                    <span>{{ jobInfo.company }}</span>
                    <span v-show="jobInfo.new">NEW!</span>
                    <span v-show="jobInfo.featured">FEATURED</span>
                </div>
                <h1>{{ jobInfo.position }}</h1>
                <ul>
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
    justify-content: center;

    background-color: #fff;
    //max-width: 1440px;
    //width: 100%;

    .jl-card_main-info {
        display: flex;

        & > div {
            // & > img {}

            // & > div {}
            // & > h1 {}
            & > ul {
                display: flex;
                // li {}
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