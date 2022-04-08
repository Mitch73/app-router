<template>
  <div class="post">
    <img :src="image"  />
    <ul>
      <li>{{title}}</li>
      <li>{{description}}</li>
      <li>{{text}}</li>
    </ul>
  </div>
</template>

<script setup>
/*importation de useRoute de vue router */
import { useRoute } from 'vue-router'

const route = useRoute()

const {id, title, description, text, img} = route.query;

/*chemin d'image plus la donnée passé dans les données posts*/
const image = '../assets/' + img ; 

</script>

<style scoped>
img{
  height: 20vh;
}

ul li{
  list-style: none;
}

.post{
  text-align: center;
}
</style>

