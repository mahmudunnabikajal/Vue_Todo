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
  },
  {
    path: '/todo-localstorage-vuex',
    name: 'todo-localstorage-vuex',
    component: () => import('@/views/todo-localstorage-vuex/TodoHome.vue'),
    children: [
      {
        path: 'todo-list',
        name: 'todo-localstorage-vuex-list',
        component: () => import('@/views/todo-localstorage-vuex/TodoList.vue')
      },
      {
        path: 'todo-create',
        name: 'todo-localstorage-vuex-create',
        component: () => import('@/views/todo-localstorage-vuex/TodoCreate.vue')
      },
      {
        path: 'todo-edit/:index/:id',
        name: 'todo-localstorage-vuex-edit',
        component: () => import('@/views/todo-localstorage-vuex/TodoEdit.vue')
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
