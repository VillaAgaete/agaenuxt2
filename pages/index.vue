<template>
    <div class="containerPanel">
        
        <div class="panelOne">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/piscinaNatural1.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextOne"><h3>Costa</h3></div>
        </div>
        <div class="panelTwo">
            <NuxtLink to="/costa">
                <NuxtImg class="panelImg" src="/pueblo.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextTwo"><h3>Agaete</h3></div>
        </div>
        <div class="panelThree">
            <NuxtLink to="/interior">
                <NuxtImg class="panelImg" src="/valle2.webp"></NuxtImg>
            </NuxtLink>
            <div class="centeredTextThree"><h3>Interior</h3></div>
        </div>
    </div>
    <!-- <div id="map">
        <component is="script">
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAo3ZaPWqtswfqZ5xAoBz6Nyrk9pW6NwWs&map_ids=a9dea733df81e446&callback=initMap"
            defer
        </component>
    </div> -->
    <MiniCard />

    <!-- <video class="myVideo" autoplay loop id="expert-video" muted playsinline>
        <source src="/videoAgaete.mp4" type="video/mp4">
    </video> -->

    <MiniCard2 />
    <BigCard />

</template>
<script>
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 28.099093, lng: -15.698951},  // Posición inicial del mapa
//         zoom: 4,
//         mapId: a9dea733df81e446
//     });

//     var marker = new google.maps.Marker({
//         position: {lat: 28.099093, lng: -15.698951},  // Posición del marcador
//         map,
//         title: "DEDO DE DIOS",
//         icon: {
//         url: '/dedo_dios_contorno.svg',
//         scaledSize: new google.maps.Size(38, 31)
//     }
//     });

//     var infowindow = new google.maps.InfoWindow({
//         content: '<div id="content">'+
//         '<div id="siteNotice">'+
//         '</div>'+
//         '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//         '<div id="bodyContent">'+
//         '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//         'sandstone rock formation in the southern part of the '+
//         'Northern Territory, central Australia.</p>'+
//         '</div>'+
//         '</div>'
//     });

//     marker.addListener('click', function() {
//         infowindow.open(map, marker);
//     });
// }

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
    .panelOne:hover .panelImg:hover{
        filter: brightness(105%);
    }
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
    .panelTwo:hover .panelImg:hover{
        filter: drop-shadow(8px 8px 10px gray);
    }
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
    .panelThree:hover .panelImg:hover{
        filter: opacity(95%);
    }
    .centeredTextThree{
        top: 20%;
        left: 83%;
        transform: translate(-50%, -50%);

        position: absolute;
        color: rgb(255, 246, 232);
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