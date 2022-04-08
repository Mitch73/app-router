import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import User from '../views/User.vue'
import Bitcoin from '../views/Bitcoin.vue'

const router = createRouter({
  // 
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Posts,
      props: true
    },
    {
      // route paramétrique elle prend une variable qu'on récupère de son code et accepte les paramètres
      // ce qui la rend dynamique
      path: '/post/:id',
      name: 'post',
      component: ()=>import('../views/Post.vue'),
      props: true
    },
    {
      // route user
      path: '/user',
      name: 'user',
      component: User
    },
    {
      // route bitcoin
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin
    }
  ]
})


export default router

