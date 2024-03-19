<template>
    <div class="mobilePanel">
        <div class="panel panelOne">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/piscinaNatural1.webp"></NuxtImg>
            </NuxtLink>
        </div>
        <div class="panel panelTwo">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/pueblo.webp"></NuxtImg>
            </NuxtLink>
        </div>
        <div class="panel panelThree">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/valle2.webp"></NuxtImg>
            </NuxtLink>
        </div>
    </div>
    <!-- Agaeteeeeeeeeee
    <div>
        <NuxtLink to="/agaete/cultura">Fiestas y cultura</NuxtLink>
    </div>
    <div>
        <NuxtLink to="/agaete/gastronomia">Gastronomía Local</NuxtLink>
    </div>
    <div>
        <NuxtLink to="/agaete/barrios">Barrios de Agaete</NuxtLink>
    </div> -->
</template>
<script>
</script>
<style scoped>
    .mobilePanel{
        height: 100vh;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
    }
    .panel{
        width: 100%;
        max-height: 33%;
    }
    .panelImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>