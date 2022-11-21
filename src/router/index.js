import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    component: () => import('@/views/TodoList.vue')
  },
  {
    path: '/todo-create',
    name: 'todo-create',
    component: () => import('@/views/TodoCreate.vue')
  },
  {
    path: '/todo-edit/:index/:id',
    name: 'todo-edit',
    component: () => import('@/views/TodoEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
