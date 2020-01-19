import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const routers = require.context('../views', true, /_router.js$/)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: routers.keys().map(key => routers(key).default).flat(),
  },
]

const router = new VueRouter({
  routes,
})

export default router
