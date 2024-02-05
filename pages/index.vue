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
    
    <!-- Spline BURGER IFRAME  -->
    <!-- <iframe src='https://my.spline.design/glassburgerv2-5f70d01968ddf07f90e5a6c71d62bb1a/' frameborder='0' width='100%' height='100%'></iframe> -->

    <div class="cardsDiv">
        <div class="cardSurrounding">
            <div class="card">
                <NuxtImg class="cardImg" src="/piscinaNatural1.jpg"></NuxtImg>
            </div>
        </div>
        <div class="card">
            <NuxtImg class="cardImg" src="/fiesta7.jpg"></NuxtImg>
        </div>
        <div class="card">
            <NuxtImg class="cardImg" src="/valle2.jpg"></NuxtImg>
        </div>
    </div>

    <!-- <div class="videoFrame">
        <video autoplay="" loop="" id="expert-video" muted="" playsinline="" class="absolute top-0 left-0 object-contain h-full w-full z-0"><source src="/videoAgaete.mp4" type="video/mp4"></video>
    </div> -->

    <video class="myVideo" autoplay loop id="expert-video" muted playsinline>
        <source src="/videoAgaete.mp4" type="video/mp4">
    </video>


    <div class="cardsDiv">
        <div class="cardSurrounding">
            <div class="card">
                <NuxtImg class="cardImg" src="/naranjas.jpg"></NuxtImg>
            </div>
        </div>
        <div class="card">
            <NuxtImg class="cardImg" src="/cafe.jpg"></NuxtImg>
        </div>
        <div class="card">
            <NuxtImg class="cardImg" src="/queso1.jpg"></NuxtImg>
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
        top: 20%;
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
        top: 20%;
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
        top: 20%;
        left: 83%;
        transform: translate(-50%, -50%);

        position: absolute;
        color: rgb(255, 246, 232);
    }
    .cardsDiv{
        height: 100vh;
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

    /* .videoFrame{
        max-width: 100vw;
        height: auto;
    } */
    .myVideo {
        border: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        object-fit: contain;
        z-index: 0;
    }

    
</style>