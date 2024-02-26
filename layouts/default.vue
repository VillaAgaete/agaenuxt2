<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <NuxtImg src="../public/dedo_dios_contorno.svg" alt="contorno dedo de dios"/>
      </NuxtLink>
    </div>
    <nav>
      <ul class="nav-links">
        <li><NuxtLink to="/ver">Costa</NuxtLink></li>
        <li><NuxtLink to="/hacer">Agaete</NuxtLink></li>
        <li><NuxtLink to="/hacer">Interior</NuxtLink></li>
      </ul>
    </nav>
    <a href="#" class="btn"><button><NuxtLink to="/hacer">Actividades</NuxtLink></button></a>
  </header>
  <div>
      <slot />
  </div>
</template>
<script>
  /* eslint-disable */

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}
body{
  background-color: #fff59d;
}
a{
  text-decoration: none;
}
.header{
  background-color: #a3adb1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  padding: 5px 5%;
}
.header .logo{
  cursor: pointer;
  margin-right: auto;
}
.header .logo img{
  height: 70px;
  width: auto;
  transition: all 0.3s;
}
.header .logo img:hover{
  transform: scale(1.2);
}
.header .nav-links{
  list-style: none;
}
.header .nav-links li{
  display: inline-block;
  padding: 0 15px;
}
.header .nav-links li:hover{
  transform: scale(1.1);
}
.header .nav-links a{
  font-size: 700;
  color: aliceblue;
  text-decoration: none;
}
.header .nav-links a:hover{
  color: rgb(136, 194, 245);
}
.header .btn button{
  font-weight: 700;
  color: rgb(37, 77, 112);
  padding: 9px 25px;
  background: #d4e0e6;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.header .btn button:hover{
  background-color: aliceblue;
  color: #7982fa;
  transform: scale(1.1);
}
</style>