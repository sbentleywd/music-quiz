import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name : 'Landing',
		component: Landing
	}
]

const router = new VueRouter({
	routes
})

export default router