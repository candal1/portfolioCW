import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Composition from '../views/Composition.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/composition-projects',
    name: 'Composition',
    component: Composition
  }
]

const router = new VueRouter({
  routes
})

export default router
