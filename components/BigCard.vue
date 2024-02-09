<template>
    <div class="cardsDiv">
        <div class="card">
            <div class="textInCard">
                <h2>Playa de las Nieves</h2>
                <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Eveniet praesentium,
                        facere pariatur reprehenderit nostrum maxime 
                        at autem veniam voluptates nemo iusto laudantium 
                        labore quos optio error natus saepe! Aliquam, vero!</p>
            </div>
            <NuxtImg class="cardImg" src="/fireworks.webp"></NuxtImg>
        </div>
    </div>
    <div class="cardsDiv">
        <div class="card">
            <div class="textInCard">
                <h2>Playa del Risco</h2>
                <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Eveniet praesentium,
                        facere pariatur reprehenderit nostrum maxime 
                        at autem veniam voluptates nemo iusto laudantium 
                        labore quos optio error natus saepe! Aliquam, vero!</p>
            </div>
            <NuxtImg class="cardImg" src="/playaRisco.webp"></NuxtImg>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    h2{
        text-align: center;
        font-size: clamp(2rem, 3vw + 0.5rem, 5rem);
    }
    p{
        text-align: center;
        font-size: clamp(0.7rem, 1vw + 0.5rem, 2rem);
    }
    .cardsDiv{
        height: 60vh;
        max-width: 100vw;
        background-color: antiquewhite;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .card{
        display: flex;
        justify-content: space-around;
        height: 45vh;
        min-width: 60vw;
        background: #face95;

        padding: 25px;
        border-radius: 30px;
    }
    .textInCard{
        max-height: 40vh;
        max-width: 30vw;
        background: #face95;

        padding-right: 30px;
    }
    .cardImg{
        width: 25vw;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        transition: all .2s;
    }
    .card:hover{
        box-shadow: 1px 1px 0 1px #381f3a;
        cursor: pointer;
    }
</style>