import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Stake from '@/views/Stake.vue'
import About from '@/views/About.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/stake', name: 'stake', component: ()=>import('@/views/Stake.vue')},
  {path: '/about', name: 'about', component: ()=>import('@/views/About.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router