<template>
    <div class="agaeteTitle">
        <h1 class="textTitle">Conoce Agaete</h1>
    </div>
    <div class="container">
        <video class="myVideo" autoplay loop muted playsinline>
            <source src="/video_ecohuerto_agaete.mp4" type="video/mp4">
        </video>
    </div>
    <!-- <BWToColor /> -->
    <MiniCard />
    <ShadowCard />
    <!-- <Carousel /> -->
    <!-- <div>
        INTERIORR// RUTAS Y NATURALEZA? PAISAJES?
    </div>
    <div>
        <NuxtLink to="/interior/naturaleza">Naturaleza</NuxtLink>
    </div>
    <div>
        <NuxtLink to="/interior/senderismo">Senderismo</NuxtLink>
    </div> -->
</template>
<script>
    import BWToColor from '~/components/BWToColor.vue';
    import MiniCard from '/_nuxt/components/MiniCard.vue';
</script>
<style>
    .agaeteTitle{
        margin: 0;
        padding: 0;
    }
    .textTitle{
        margin: 0;
        padding-top: 5rem;
        padding-bottom: 3rem;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
    }
    .container{
        display: flex;
        justify-content: center;
        max-width: 100vw;
        max-height: 90vh;
        margin-bottom: 10rem;
    }
    .myVideo{
        height: 100%;
        width: 100%;
    }
    
</style>