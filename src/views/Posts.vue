<template>
  <div class="home">
    <h1>Tous les articles</h1>
    <div class="title">
    <router-link class="posts"
    v-for="post in posts" 
    :key="post.id" 
    :to="{ path:'/post/' + post.id, query:{...post}}">
    <p>{{post.title}}</p>
    </router-link>
    </div>
  </div>
</template>

<script>
// les données posts
export default {
    data(){
      return{
        posts: [
          { id: 1, title : "MongoDB", description : "blabla", text: "un texte plus long", img:'MongoDB.jpg' },
          { id: 2, title : "MySQL", description : "blabla", text: "un texte plus long", img:'Mysql.jpg' },
          { id: 3,  title : "PHP", description : "blabla", text: "un texte plus long",  img:'php.jpg'},
          { id: 4,title : "Python", description : "blabla", text: "un texte plus long", img:'Python.jpg' },
          { id: 5,title : "Docker", description : "blabla", text: "un texte plus long", img:'Docker.jpg'  },
        ]
      }
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
