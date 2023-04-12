import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
<<<<<<< HEAD
import Signup from '../pages/member/signup.vue'
import Login from '../pages/member/login.vue'
import Modify from '../pages/member/modify.vue'
import Map from '../pages/meeting/offMeeting/index.vue'
=======
import OffMeeting from '../pages/meeting/offMeeting/index.vue'
>>>>>>> main
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
      path: '/offMeeting',
      name: 'OffMeeting',
      component: OffMeeting
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component: Meeting
    }
  ]
})

export default router
