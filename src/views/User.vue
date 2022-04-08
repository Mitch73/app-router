<template>
  <div class="users">
    <h1>Authors</h1>
    <div v-for="user in users" 
    :key="user.id">
    <ul>
    <li>{{user.title}}</li>
    <li>{{user.description}}</li>
    <li>{{user.text}}</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
        //  
    data(){
      return{
        users: [
          { title : "MongoDB", description : "blabla", text: "un texte plus long" },
          { title : "MySQL", description : "blabla", text: "un texte plus long" },
          { title : "PHP", description : "blabla", text: "un texte plus long" },
          { title : "Python", description : "blabla", text: "un texte plus long" },
          { title : "Docker", description : "blabla", text: "un texte plus long" },
        ]
      }
    }
}
</script>

<style scoped>
li{
  list-style: none;
}

.users{
  text-align: center;
}

</style>
