<template>
  <div>
    <h2>Todo Create</h2>
    <div class="todo-create flex-center">
      <form @submit.prevent="todoAdd">
        <input class="form-control" type="text" v-model="newTodo.id" disabled required />
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
        id: null,
        title: null,
        comment: null,
        status: "Pending",
      }
    }
  },
  components: {},
  created() {
    this.todoGet()
    this.todoIdGenerate()
  },
  methods: {
    todoGet() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    },
    todoIdGenerate() {
      this.newTodo.id = Math.ceil(Math.random() * 1000000)
    },
    todoAdd() {
      if (!this.todos == []) {
        this.todos.push(this.newTodo)
        this.newTodo = {
          title: null,
          comment: null,
          status: "Pending",
        }
      } else {
        this.todos = []
        let objTodo = {}
        objTodo.id = this.newTodo.id
        objTodo.title = this.newTodo.title
        objTodo.comment = this.newTodo.comment
        objTodo.status = this.newTodo.status
        this.todos.push(objTodo)
      }
      this.todoIdGenerate()
      this.todoSubmit()
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
