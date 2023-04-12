import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Signup from '../pages/member/signup.vue'
import Login from '../pages/member/login.vue'
import Modify from '../pages/member/modify.vue'
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
      path: '/members/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/members/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/members/modify',
      name: 'Modify',
      component: Modify
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
