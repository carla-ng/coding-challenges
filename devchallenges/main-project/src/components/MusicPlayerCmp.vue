<template>
    <section class="mp-cmp" v-if="playlist.length">
        <div class="mp-cmp_inner-container">
            <figure class="mp-cmp_img">
                <img :src="playlist[current].img" :alt="playlist[current].title + ' cover'">
            </figure>

            <h1 class="mp-cmp_title">{{ playlist[current].title }}</h1>
            <span class="mp-cmp_artist">{{ playlist[current].artist }}</span>

            <div class="mp-cmp_progressbar">
                <div class="mp-cmp_progressbar_time">
                    <span>02:23</span>
                    <span>03:15</span>
                </div>
                <div class="mp-cmp_progressbar_bar">
                    <div class="mp-cmp_progressbar_bar-progress"></div>
                </div>
                <audio>
                    <source :src="playlist[current].mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                </audio>
            </div>

            <div class="mp-cmp_controls">
                <div class="mp-cmp_controls-prev">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8136 14.2517L23.6953 10.9841C25.0284 10.2435 26.6666 11.2074 26.6666 12.7324V19.2676C26.6666 20.7926 25.0284 21.7566 23.6953 21.016L17.8136 17.7483C16.442 16.9863 16.442 15.0137 17.8136 14.2517Z" fill="#4D5562"/>
                        <path d="M10.6666 22.6667L10.6666 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5.33325 22.6667L5.33325 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="mp-cmp_controls-play-pause">
                    <svg class="play-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.941 14.244L14.119 10.236C12.686 9.50176 11 10.5696 11 12.2115V19.7885C11 21.4304 12.686 22.4982 14.119 21.764L21.941 17.756C23.353 17.0325 23.353 14.9675 21.941 14.244Z" fill="#E5E7EB"/>
                    </svg>
                    <svg class="pause-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3334 22.6667L21.3334 9.33335" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round"/>
                        <path d="M26.6667 22.6667L26.6667 9.33335" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="mp-cmp_controls-next">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1864 14.2517L8.30466 10.9841C6.9716 10.2435 5.33337 11.2074 5.33337 12.7324V19.2676C5.33337 20.7926 6.9716 21.7566 8.30466 21.016L14.1864 17.7483C15.558 16.9863 15.558 15.0137 14.1864 14.2517Z" fill="#4D5562"/>
                        <path d="M21.3334 22.6667L21.3334 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
                        <path d="M26.6667 22.6667L26.6667 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>     
    </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const playlist = ref([])
const current = ref(0)


// Fetch playlist from JSON file
const fetchPlaylist = async () => {
    try {
        const response = await fetch('/music-player/json/playlist.json')

        if ( !response.ok ) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        playlist.value = data
        console.log(data)

    } catch ( error ) {
        console.error('Error fetching playlist JSON: ', error.message)
    }
}


onMounted(() => {
    fetchPlaylist()
});

</script>


<style lang="scss" scoped>
.mp-cmp {
    background-color: $mp-base-color-01;
    border-radius: 25px;
    margin: 0.5rem;
    max-width: 400px;
    padding: 1.5rem;

    .mp-cmp_inner-container {
        .mp-cmp_img {
            border-radius: 25px;
            margin: 0;
            overflow: hidden;

            // img {}
        }

        .mp-cmp_title {
            color: $mp-accent-color-02;
            font-family: $font-family-inter;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-top: 0.8rem;
            text-align: center;
        }

        .mp-cmp_artist {
            display: flex;
            justify-content: center;

            color: $mp-base-color-03;
            font-family: $font-family-inter;
            font-size: 0.75rem;
            font-weight: 400;
            letter-spacing: 0.5px;
            margin-top: 0.4rem;
        }

        .mp-cmp_progressbar {
            margin-top: 1.5rem;

            .mp-cmp_progressbar_time {
                display: flex;
                justify-content: space-between;

                span {
                    color: $mp-base-color-03;
                    font-family: $font-family-inter;
                    font-size: 0.625rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    user-select: none;
                }
            }

            .mp-cmp_progressbar_bar {
                background-color: $mp-accent-color-02;
                border-radius: 15px;
                cursor: pointer;
                height: 6px;
                margin-top: 0.4rem;
                overflow: hidden;
                width: 100%;

                .mp-cmp_progressbar_bar-progress {
                    background-color: $mp-accent-color-01;
                    height: 100%;
                    width: 55%;
                }
            }

            audio { display: none;}
        }

        .mp-cmp_controls {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 2.5rem 0 0.5rem 0;

            .mp-cmp_controls-prev {
                cursor: pointer;
                margin: 0 1.5rem;

                svg {
                    path {}
                }
            }
            .mp-cmp_controls-play-pause {
                background-color: $mp-accent-color-01;
                border-radius: 50%;
                cursor: pointer;
                padding: 0.5rem;

                &.playing {
                    svg.play-icon { display: none; }
                    svg.pause-icon { display: block; }
                }

                &:not(.playing) {
                    svg.play-icon { display: block; }
                    svg.pause-icon { display: none; }
                }

                svg {
                    //path {}

                    &.pause-icon {
                        margin-left: -24%;
                    }
                }
            }
            .mp-cmp_controls-next {
                cursor: pointer;
                margin: 0 1.5rem;

                // svg {
                //     path {}
                // }
            }
        }
    }
}
</style>