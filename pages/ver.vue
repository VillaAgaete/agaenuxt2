<template>
    <div>
        ver working??
    </div>
    <div class="container">
        <!-- <vue-plyr :options="options">
            <video
                controls
                crossorigin
                playsinline
                data-poster="/piscinaNatural1.jpg"
            >
                <source
                size="720"
                src="/videoAgaete.mp4"
                type="video/mp4"
                />
            </video>
        </vue-plyr> -->

        <video autoplay="" loop="" id="expert-video" muted="" playsinline="" class="absolute top-0 left-0 object-cover h-full w-full z-0"><source src="/videoAgaete.mp4" type="video/mp4"></video>

        <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
        <!-- <vue-plyr>
        <div class="plyr__video-embed">
            <iframe
            src="https://www.youtube.com/embed/xuclcxS57oQ?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
            allowtransparency
            allow="autoplay"
            ></iframe>
        </div>
        </vue-plyr> -->
    </div>
</template>
  
<script>
    /* eslint-disable */
    import Plyr from 'plyr';
    import { onMounted, ref } from 'vue'

    export default {
        setup() {
            const video = ref(null)

            onMounted(() => {
            new Plyr(video.value)
            })

            return { video }
        },
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
    video{
        width: 80vw;
        height: auto;
    }
</style>