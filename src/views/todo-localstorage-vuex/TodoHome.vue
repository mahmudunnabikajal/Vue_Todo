<template>
  <div>
    <h2>Todo With Localstorage Vuex</h2>
    <div class="todo-home">
      <nav class="navbar">
        <router-link :to="{ name:'todo-localstorage-vuex-list' }">Todo List</router-link>
        <router-link :to="{ name:'todo-localstorage-vuex-create' }">Todo Create</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'TodoHome',
  data() {
    return {
    }
  },
  created() {
    store.getters.todoInit
  },
  components: {},
  methods: {
  }
}
</script>
