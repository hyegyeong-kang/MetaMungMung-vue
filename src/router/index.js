import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Map from '../pages/meeting/offMeeting/index.vue'
import Meeting from '../pages/meeting/onMeeting/index.vue'

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
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component: Meeting
    }
  ]
})

export default router
