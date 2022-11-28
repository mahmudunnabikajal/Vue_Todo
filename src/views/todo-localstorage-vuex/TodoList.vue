<template>
  <div>
    <!-- <AlertToastr :type="this.alertToaster" v-show=""></AlertToastr> -->
    <h2>Todo List</h2>
    {{ filterStatusTodos }}
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
          <input class="form-control" list="searchByTitle" type="text" placeholder="Search Here" />
          <datalist id="searchByTitle">
            <option value></option>
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
        <tr v-for="(item,index) in filterStatusTodos" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.comment }}</td>
          <td>{{ item.status }}</td>
          <td>
            <router-link class="btn-edit" :to="{ name:'todo-localstorage-vuex-edit', params:{id:item.id , index:index} }">Edit</router-link>
            <button class="btn-remove" @click="todoRemove(index)">Remove</button>
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
// import AlertToastr from "@/components/AlertToastr.vue"
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
      'todos', 'filterStatusTodos'
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
