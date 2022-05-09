import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Stake from '@/views/Stake.vue'
import About from '@/views/About.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/stake', name: 'stake', component: Stake},
  {path: '/about', name: 'about', component: About},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router