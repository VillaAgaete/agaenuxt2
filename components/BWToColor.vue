<template>
    <div id="container">
      <img id="image-bw" src="/cafe.webp">
      <img id="image-color" :style="{ opacity: scrolled }" src="/cafeB&W.webp">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrolled: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollFunction)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollFunction)
    },
    methods: {
      scrollFunction() {
        var scrollHeight = document.documentElement.scrollHeight;
        var scrollTop = document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        this.scrolled = scrollTop / (scrollHeight - clientHeight);
      }
    }
  }
  </script>
  
  <style scoped>
  #container {
    position: relative;
    height: 500px;
    width: 500px;
  }
  #image-bw, #image-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  