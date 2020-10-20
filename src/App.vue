<template>
<div id="app">
  <div class="container text-center">
    <div class="logo mb-10">
      <router-link to="/">
      <img alt="Vue logo" src="./assets/logotareas.svg" style="width: 250px">
    </router-link>
    </div>
    
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  text-align: center;
  width: auto;
  margin-bottom: 20px; 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo{
  margin: 30px 0; 
}
</style>
