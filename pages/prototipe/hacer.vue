<template>
    <full-page :options="fullpageOptions">
        <div class="section s1">
            <NuxtImg class="sectionImg1" src="/pueblo.jpg"></NuxtImg></div>
        <div class="section s2">Descubre Aagete</div>
        <div class="section s3">Playas y naturaleza</div>
        <div class="section s4">Comida y alojamiento</div>
    </full-page>
</template>
  
<script>
    definePageMeta({
        layout: 'no-navbar'
    })
    /* eslint-disable */
    export default {
        data() {
            return {
                fullpageOptions: {
                    autoScrolling: true,
                    scrollHorizontally: true,
                    navigation: true
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                let navDots = document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span');
                navDots.forEach(dot => {
                    dot.style.backgroundColor = 'brown';
                });
            });
        }
    }
</script>

<style scoped>
    #fp-nav ul li .active span, .fp-slidesNav ul li .active span {
        background: yellow !important;
    }


    .sectionImg1{
        height: 100vh;
        width: 100vw;
        object-fit: top;
    }    
    .s2{
        height: 100vh;
        background: rgb(255, 255, 235);
    }
    .s3{
        background: rgb(107, 107, 75);
    }
    .s4{
        background: rgb(240, 206, 196);
    }
</style>