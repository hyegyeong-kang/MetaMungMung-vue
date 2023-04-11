import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Map from '../pages/map/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})

export default router
