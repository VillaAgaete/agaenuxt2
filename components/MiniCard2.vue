<template>
    <div class="cardsDiv">
        <div class="cardSurrounding"><h2>Eventos</h2>
            <div class="card">
                <NuxtImg class="cardImg" src="/nieves3.webp"></NuxtImg>
            </div>
        </div>
        <div class="cardSurrounding"><h2>Eventos</h2>
            <div class="card">
                <NuxtImg class="cardImg" src="/cafe.webp"></NuxtImg>
            </div>
        </div>
        <div class="cardSurrounding"><h2>Eventos</h2>
            <div class="card">
                <NuxtImg class="cardImg" src="/fireworks.webp"></NuxtImg>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    h2{
        text-align: center;
    }
    .cardsDiv{
        height: 70vh;
        max-width: 100vw;
        background-color: antiquewhite;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .card{
        height: 45vh;
        width: 20vw;
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