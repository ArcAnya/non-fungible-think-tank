import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import stake from '@/views/Stake.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/stake', name: 'stake', component: ()=>import('@/views/Stake.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router