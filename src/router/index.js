import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Signup from "../pages/member/signup.vue";
import Login from "../pages/member/login.vue";
import Modify from "../pages/member/modify.vue";
import OffMeeting from "../pages/meeting/offMeeting/index.vue";
import OnMeeting from "../pages/meeting/onMeeting/index.vue";
import OnMeetingSearch from "../pages/meeting/onMeeting/search.vue";
import ProductList from "../pages/store/product/index.vue";
import ProductDetail from "../pages/store/product/detail/_id.vue";
import ProductReviews from "../pages/store/product/review/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/members/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/members/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/members/modify",
      name: "Modify",
      component: Modify,
    },
    {
      path: "/offMeeting",
      name: "OffMeeting",
      component: OffMeeting,
    },
    {
      path: "/onMeeting",
      name: "OnMeeting",
      component: OnMeeting,
    },
    {
      path: "/onMeeting/search",
      name: "OnMeetingSearch",
      component: OnMeetingSearch,
    },
    {
      path: "/products",
      name: "ProductList",
      component: ProductList,
    },
    {
      path: "/products/:id",
      name: "ProductDetail",
      component: ProductDetail,
    },
    {
      path: "/products/:id/reviews",
      name: "ProductReviews",
      component: ProductReviews,
    },
  ],
});

export default router;
