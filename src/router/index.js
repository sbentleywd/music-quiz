import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/play',
    name: 'Play',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

export default router
