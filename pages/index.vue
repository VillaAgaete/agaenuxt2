<template>
    <div class="containerPanel">
        
        <div class="panel">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/piscinaNatural1.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextOne"><h3>Costa</h3></div>
        </div>
        <div class="panel">
            <NuxtLink to="/agaete">
                <NuxtImg class="panelImg" src="/pueblo.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextTwo"><h3>Agaete</h3></div>
        </div>
        <div class="panel">
            <NuxtLink to="/interior">
                <NuxtImg class="panelImg" src="/valle2.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextThree"><h3>Interior</h3></div>
        </div>
    </div>
    <!-- <BentoCards /> -->
    <!-- <ExpandCard /> -->
    <MiniCard />

    <!-- <video class="myVideo" autoplay loop id="expert-video" muted playsinline>
        <source src="/video_ecohuerto_agaete.mp4" type="video/mp4">
    </video> -->

    <MiniCard2 />
    <BigCard />

</template>
<script>

</script>
<style scoped>
    #map {
        height: 500px;
        width: 100%;
    }
    h3{
        font-weight: 300;
    }
    .containerPanel{
        max-width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
    }
    .panelImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .panel{
        width: 33%;
        transition: all 0.3s;
    }
    .panel:hover .panelImg:hover{
        filter: brightness(105%);
    }
    .centeredTextOne{
        top: 20%;
        left: 17%;
        transform: translate(-50%, -50%);

        position: absolute;
    }
    .centeredTextTwo{
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);

        position: absolute;
    }
    .centeredTextThree{
        top: 20%;
        left: 83%;
        transform: translate(-50%, -50%);

        position: absolute;
        color: rgb(255, 246, 232);
    }
    .myVideo {
        border: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }  
</style>