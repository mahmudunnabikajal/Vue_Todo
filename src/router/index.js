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
    path: '/todo-localstorage',
    name: 'todo-localstorage',
    component: () => import('@/views/todo-localstorage/TodoHome.vue'),
    children: [
      {
        path: 'todo-list',
        name: 'todo-list',
        component: () => import('@/views/todo-localstorage/TodoList.vue')
      },
      {
        path: 'todo-create',
        name: 'todo-create',
        component: () => import('@/views/todo-localstorage/TodoCreate.vue')
      },
      {
        path: 'todo-edit/:index/:id',
        name: 'todo-edit',
        component: () => import('@/views/todo-localstorage/TodoEdit.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
