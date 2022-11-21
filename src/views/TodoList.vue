<template>
  <div>
    <AlertToastr :type="this.alertToaster" v-show="alertVisible"></AlertToastr>
    <h2>Todo List</h2>
    <div class="todo-list flex-center">
      <div class="filter">
        <div class="d-flex">
          <p>Filter by Status</p>
          <select class="form-control" v-model="filterStatus" required>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div class="d-flex">
          <p>Search By Exact Title</p>
          <input class="form-control" list="searchByTitle" type="text" v-model="searchItem" placeholder="Search Here" @keyup="filter()" />
          <datalist id="searchByTitle">
            <option :value="item.title" v-for="item in todos" :key="item.id">{{ item.title }}</option>
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
        <tr v-for="(item,index) in todos" :key="index" v-show="filterStatus == item.status || filterStatus == 'All'">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.status}}</td>
          <td>
            <router-link class="btn-edit" :to="{ name:'todo-edit', params:{id:item.id , index:index} }">Edit</router-link>
            <button class="btn-remove" @click="todoRemove(index)" v-if="searchItem == ''">Remove</button>
          </td>
        </tr>
        <tr v-if="!todos || todos.length == 0">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AlertToastr from "@/components/AlertToastr.vue"
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      filterStatus: "All",
      searchItem: '',
      alertToaster: null,
      alertVisible: true
    }
  },
  components: { AlertToastr },
  created() {
    this.todoGet()
  },
  methods: {
    alertRemove() {
      setTimeout(() => this.alertVisible = false, 2000)
      this.alertVisible = true
    },
    todoGet() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    },
    todoRemove(item) {
      this.todos.splice(item, 1);
      this.todoSubmit()
      this.alertToaster = "success"
      this.alertRemove()
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    },
    searchByInput() {
      if (this.searchItem != "" && this.todos) {
        this.todos = this.todos.filter(item => {
          return item.title == this.searchItem
        })
      }
    },
    filter() {
      this.todoGet()
      this.searchByInput()
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
