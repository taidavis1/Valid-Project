import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: () => import('@/views/Test.vue')
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	},
	{
		name: 'ItemDetail',
		path: '/itemDetail',
		component: () => import('@/views/ItemDetail.vue')
	},
	{
		name: 'ItemList',
		path: '/itemList',
		component: () => import('@/views/ItemList.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
