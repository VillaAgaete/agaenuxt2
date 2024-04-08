<template>
    <div class="cardsDiv">
        <div class="cardSurrounding">
            <p>Gastronomía/comida local</p>
            <div class="card">
                <NuxtImg class="cardImg" src="/queso1.webp"></NuxtImg>
            </div>
        </div>
        <div class="cardSurrounding">
            <p>Tradición</p>
            <div class="card">
                <NuxtImg class="cardImg" src="/fiesta7.webp"></NuxtImg>
            </div>
        </div>
        <div class="cardSurrounding">
            <p>Senderos y rutas</p>
            <div class="card">
                <NuxtImg class="cardImg" src="/naranjas.webp"></NuxtImg>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    p{
        text-align: center;
    }
    .cardsDiv{
        min-height: 60vh;
        max-width: 100%;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .cardSurrounding{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card{        
        height: 45vh;
        width: 20rem;
    }
    .cardImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        transition: all .2s;
    }
    .cardImg:hover{
        transform: translate(-10px,-10px);
        box-shadow: 10px 10px 10px #ff5700;
    }
</style>