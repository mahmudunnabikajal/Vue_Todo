<template>
  <div>
    <h2>Todo Edit</h2>
    <div class="todo-create flex-center">
      <form @submit.prevent="updateTodo">
        <div v-for="item in editTodo" :key="item.id">
          <input class="form-control" type="text" v-model="item.id" disabled required />
          <input class="form-control" type="text" v-model="item.title" placeholder="Write Title" required />
          <input class="form-control" type="text" v-model="item.comment" placeholder="Write Comment" required />
          <select class="form-control" v-model="item.status" required>
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <br />
        <button type="submit" class="btn-submit">Submit</button>
      </form>
    </div>
    {{ todos }}
  </div>
</template>

<script>
export default {
  name: 'TodoEdit',
  data() {
    return {
      todoEditId: this.$route.params.id,
      todoEditIndex: this.$route.params.index,
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
      this.editTodo = this.todos.filter(item => {
        return item.id == this.todoEditId
      })
    },
    updateTodo() {
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    }
  }
}
</script>
