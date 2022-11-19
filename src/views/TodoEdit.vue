<template>
  <div>
    <h2>Todo Edit</h2>
    <div class="todo-create flex-center">
      <form @submit.prevent="updateTodo">
        <input class="form-control" type="text" v-model="editTodo.id" disabled required />
        <input class="form-control" type="text" v-model="editTodo.title" placeholder="Write Title" required />
        <input class="form-control" type="text" v-model="editTodo.comment" placeholder="Write Comment" required />
        <select class="form-control" v-model="editTodo.status" required>
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
  name: 'TodoEdit',
  data() {
    return {
      todoEditId: this.$route.params.id,
      todos: [],
      editTodo: {
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
    this.todoGetById()
  },
  methods: {
    todoGet() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    },
    todoGetById() {
      this.editTodo = this.todos.find(item => {
        return item.id == this.todoEditId
      })
    },
    updateTodo() {
      if (this.todoGetById) {
        this.todos.push({
          id: this.editTodo.id,
          title: this.editTodo.title,
          comment: this.editTodo.comment,
          status: this.editTodo.status,
        })
      }
      this.todoSubmit()
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    }
  }
}
</script>
