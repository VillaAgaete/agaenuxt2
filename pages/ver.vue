<template>
    <div>
        ver working??
    </div>
    <div class="container">
        <vue-plyr :options="options">
            <video
                controls
                crossorigin
                playsinline
                data-poster="piscinaNatural1.jpg"
            >
                <source
                size="720"
                src="/videoAgaete.mp4"
                type="video/mp4"
                />
            </video>
        </vue-plyr>
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