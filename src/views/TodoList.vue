<template>
  <div>
    <div class="todo-list flex-center">
      <table border="1">
        <tr>
          <th>Title</th>
          <th>Comment</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="(item,index) in todos" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.status}}</td>
          <td>
            <button class="btn-remove" @click="remove(index)">Remove</button>
          </td>
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
      todos: []
    }
  },
  components: {},
  created() {
    this.getTodo()
  },
  methods: {
    getTodo() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  th {
    background: #999;
    color: #fff;
    padding: 5px 0;
  }
  td {
    padding: 5px 10px;
  }
}
</style>
