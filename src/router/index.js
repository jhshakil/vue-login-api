import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import BlogView from '../views/BlogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn,
    // meta: { requiresAuth: true },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let auth = localStorage.getItem('auth')
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth) {
      next();
      return;
    }
    next("/login");
  } else {
    if (auth) {
      if(to.path == '/login' || to.path == '/signup') {
        router.go(-1)
      }
    }
    next();
  }
});

export default router
