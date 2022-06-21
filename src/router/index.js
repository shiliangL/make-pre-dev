/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-06-21 16:25:56
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import generatePage from '@/views/index'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  ...generatePage
]

const router = new VueRouter({
  routes
})

export default router
