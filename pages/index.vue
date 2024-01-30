<template>
    <div class="containerPanel">
        <div class="panelOne">
            <NuxtImg class="panelImg" src="/valle2.jpg"></NuxtImg>
            <div class="centeredTextOne">Playas y piscinas naturales</div>
        </div>
        <div class="panelTwo">
            <NuxtImg class="panelImg" src="/pueblo.jpg"></NuxtImg>
            <div class="centeredTextTwo">Agaete</div>
        </div>
        <div class="panelThree">
            <NuxtImg class="panelImg" src="/fireworks.jpg"></NuxtImg>
            <div class="centeredTextThree">Actividades</div>
        </div>
    </div>
    
    <div class="cardsDiv">
        <div class="card">
            <NuxtImg class="cardImg" src="/piscinaNatural1.jpg"></NuxtImg>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
    .containerPanel{
        background-color: aquamarine;
        max-width: 100vw;
        height: 75vh;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
    }
    .panelImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .panelOne{
        width: 33%;
        background-color: antiquewhite;
        flex-grow: 1;

        transition: all 0.3s;
    }
    /* .panelOne:hover{
        flex-grow: 2;
    } */
    .centeredTextOne{
        top: 50%;
        left: 17%;
        transform: translate(-50%, -50%);

        position: absolute;
    }
    .panelTwo{
        width: 33%;
        background-color: rgb(252, 194, 118);
        flex-grow: 1;
        
        transition: all 0.3s;
    }
    /* .panelTwo:hover{
        flex-grow: 2;
    } */
    .centeredTextTwo{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        position: absolute;
    }
    .panelThree{
        width: 33%;
        background-color: rgb(243, 250, 140);
        flex-grow: 1;
        
        transition: all 0.3s;
    }
    /* .panelThree:hover{
        flex-grow: 2;
    } */
    .centeredTextThree{
        top: 50%;
        left: 83%;
        transform: translate(-50%, -50%);

        position: absolute;
    }
    .cardsDiv{
        height: 100vh;
        width: 100vw;
        background-color: antiquewhite;
        display: flex;
        justify-content: center;
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