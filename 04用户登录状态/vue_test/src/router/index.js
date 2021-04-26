import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫：实现了未登录不能访问首页的问题
router.beforeEach((to,from,next) => {
  if(to.path === "/login"){
    next();
  }else{
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login");
    }
  }
})

export default router
