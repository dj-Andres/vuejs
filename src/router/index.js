import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/Servicios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
