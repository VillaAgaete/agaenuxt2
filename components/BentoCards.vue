<template>
    bento cards
    <div class="wrapper">
        <div class="bento1">
            <img class="bento-img" src="/fiesta7.webp">
        </div>
        <div class="bento2">
            <img class="bento-img" src="/paisaje1.webp">
        </div>
        <div class="bento3">
            <img class="bento-img" src="/gastronomia.webp">            
        </div>
        <div class="bento4">
            <img class="bento-img" src="/verticalMap.avif">
        </div>
        <div class="bento5">
            <img class="bento-img" src="/nieves.webp">
        </div>
        <div class="bento6">
            <img class="bento-img" src="/escudo-agaete.png">
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    body{
        background-color: rgb(252, 194, 118);
        color: black;
        max-width: 100vw;
    }
    .wrapper{
        justify-content: center;
        display: grid;
        margin: 0 auto;
        max-width: 90%;
        grid-template-columns: 200px 200px 200px 200px 200px;
        grid-auto-rows: 200px 200px 200px 200px 200px;
        grid-gap: 10px;
    }
    .wrapper div{
        border-radius: 10px;
    }
    .bento1{
        grid-column: 1/1;
        grid-row: 1/5;
        
    }
    .bento-img{
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: clip;
        border-radius: 10px;
    }
    .bento-img:hover{
        box-shadow: 1px 1px 5px steelblue;
    }
    .bento2{
        grid-column: 2/6;
        grid-row: 1/1;
    }
    .bento3{
        grid-column: 2/5;
        grid-row: 2/5;
    }
    .bento4{
        grid-column: 5/5;
        grid-row: 2/5;
    }
    .bento5{
        grid-column: 1/5;
        grid-row: 5/5;
    }
    .bento6{
        grid-column: 5/5;
        grid-row: 5/5;
    }

</style>