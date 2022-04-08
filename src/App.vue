<template>
      <nav>
        <router-link class="nav" to="/">Home</router-link>
        <router-link class="nav" to="/user">Qui suis-je</router-link>
        <router-link class="nav" to="/bitcoin">Bitcoin</router-link>
      </nav>
      
    <router-view />
</template>

<style>
/* La navbar de l'app.vue */
nav{  
  display: flex;
  justify-content: space-around;
  padding: 2em 0;
}
.nav{
  color: #000;
  text-decoration: none;
}
/* Le fichier posts */
.home{
  text-align: center;
  margin: auto;
}
.title{
  display: grid;
  width: 14em;
  grid-template-columns: 1fr 1fr;
  margin: auto;
}
.posts{
  color: #000;
  text-decoration: none;
}

</style>
