<template>
    <div>
        ver working??
    </div>
    <div>
        <video ref="video" src="/videoAgaete.mp4" />
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
   
</style>