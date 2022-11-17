<template>
  <div>
    <div class="todo-create flex-center">
      <form @submit.prevent="todoAdd">
        <input class="form-control" type="text" v-model="newTodo.title" placeholder="Write Title" required />
        <input class="form-control" type="text" v-model="newTodo.comment" placeholder="Write Comment" required />
        <select class="form-control" v-model="newTodo.status" required>
          <option value="Pending">Pending</option>
          <option value="Running">Running</option>
          <option value="Done">Done</option>
        </select>
        <br />
        <button type="submit" class="btn-submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoCreate',
  data() {
    return {
      todos: [],
      newTodo: {
        title: null,
        comment: null,
        status: "Pending"
      }
    }
  },
  components: {},
  methods: {
    todoAdd() {
      this.todos.push(this.newTodo);
      // this.newTodo = "";
      this.todoSubmit();
    },
    todoSubmit() {
      let newTodoParsed = JSON.stringify(this.todos)
      localStorage.setItem("todolist", newTodoParsed)
    }
  }
}
</script>
<style lang="scss" scoped>
.form-control {
  padding: 10px;
  margin: 5px;
}
</style>
