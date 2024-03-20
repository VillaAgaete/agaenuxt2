<template>
    <div class="container">
        <div class="cardSurrounding">
            <h2>Gastronomía/comida local</h2>
            <div class="card">
                <NuxtImg class="cardImg" src="/queso1.webp"></NuxtImg>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    .container{
        background-color: rgb(255, 247, 236);
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
        box-shadow: 10px 10px 10px #58514e;
    }
    .cardImg:hover{
        transform: translate(5px,5px);
        box-shadow: 0 0 0;
    }
</style>