import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Signup from '../pages/member/signup.vue'
import Login from '../pages/member/login.vue'
import Modify from '../pages/member/modify.vue'
import OffMeeting from '../pages/meeting/offMeeting/index.vue'
import OnMeeting from '../pages/meeting/onMeeting/index.vue'
import OnMeetingSearch from '../pages/meeting/onMeeting/search.vue'
import RegisterModal from '../pages/meeting/onMeeting/board/index.vue'

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
      path: '/offMeeting',
      name: 'OffMeeting',
      component: OffMeeting
    },
    {
      path: '/onMeeting',
      name: 'OnMeeting',
      component: OnMeeting
    },
    {
      path: '/onMeeting/search',
      name: 'OnMeetingSearch',
      component: OnMeetingSearch
    },
    {
      path: '/onMeeting/board',
      name: 'RegisterModal',
      component: RegisterModal
    }
  ]
})

export default router
