<template>
  <div>
    <div class="todo-list flex-center">
      <div class="filter">
        <div class="d-flex">
          <p>Filter by Status</p>
          <select class="form-control" v-model="filterStatus" required @change="filter()">
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div class="d-flex">
          <p>Search By Title</p>
          <input type="text" v-model="searchItem" placeholder="Search Here" @keyup="filter()" />
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
        <tr v-for="(item,index) in todos" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.status}}</td>
          <td>
            <router-link class="btn-edit" :to="{ name:'todo-edit', params:{id:item.id} }">Edit</router-link>
            <button class="btn-remove" @click="todoRemove(index)">Remove</button>
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
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      filterStatus: "All",
      searchItem: ""
    }
  },
  components: {},
  created() {
    this.todoGet()
  },
  methods: {
    todoGet() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    },
    todoRemove(item) {
      this.todos.splice(item, 1);
      this.todoSubmit()
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    },
    filterByStatus() {
      if (this.filterStatus !== "All") {
        this.todos = this.todos.filter(item => {
          return item.status == this.filterStatus
        })
      }
      console.log(this.todos)
    },
    searchByInput() {
      console.log(this.searchItem)
      if (this.searchItem != "") {
        this.todos = this.todos.filter(item => {
          return item.title == this.searchItem
        })
      }
    },
    filter() {
      this.todoGet()
      this.filterByStatus()
      this.searchByInput()
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
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
