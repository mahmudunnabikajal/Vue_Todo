<template>
  <div>
    <h2>Todo List</h2>
    <div class="todo-list flex-center">
      <div class="filter">
        <div class="d-flex">
          <p>Filter by Status</p>
          <select class="form-control" @change="this.filterStatusTodoGet" v-model="$store.state.filterStatus" required>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div class="d-flex">
          <p>Search By Exact Title</p>
          <input class="form-control" list="searchByTitle" v-model="$store.state.searchItem" type="text" placeholder="Search Here" @keyup="searchByInput" />
          <datalist id="searchByTitle">
            <option :value="item.title" v-for="item in filterStatusTodos" :key="item.id">{{ item.title }}</option>
          </datalist>
        </div>
      </div>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Comment</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="(item,index) in todos" :key="item.id" v-show="filterStatus == item.status || filterStatus == 'All'">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.comment }}</td>
          <td>{{ item.status }}</td>
          <td>
            <router-link class="btn-edit" :to="{ name:'todo-localstorage-vuex-edit', params:{id:item.id , index:index} }">Edit</router-link>
            <button class="btn-remove" @click="todoRemove(index)" v-if="searchItem == ''">Remove</button>
          </td>
        </tr>
        <tr v-if="!filterStatusTodos.length || !todos.length">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  data() {
    return {}
  },
  created() {
    store.getters.todoGet
    store.getters.filterStatusTodoGet
  },
  computed: {
    ...mapState([
      'todos', 'filterStatusTodos', 'filterStatus', 'searchItem'
    ]),
    ...mapGetters([
      'todoGetEditInfo'
    ])
  },
  methods: {
    ...mapActions([
      'todoRemove'
    ]),
    filterStatusTodoGet() {
      store.getters.filterStatusTodoGet
    },
    searchByInput() {
      store.getters.searchByInput
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  align-items: center;
}
.filter {
  margin: 10px;
  div {
    padding: 5px;
  }
}
.todo-list {
  th {
    background: #999;
    color: #fff;
    padding: 10px;
  }
  td {
    padding: 10px;
  }
}
</style>
