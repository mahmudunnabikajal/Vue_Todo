<template>
  <div>
    <AlertToastr :type="this.alertToaster" v-show="alertVisible"></AlertToastr>
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
import AlertToastr from "@/components/AlertToastr.vue"
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
      },
      alertToaster: null,
      alertVisible: true
    }
  },
  components: { AlertToastr },
  created() {
    this.todoGet()
    this.todoIdGenerate()
  },
  methods: {
    alertInit(status) {
      this.alertToaster = status
      setTimeout(() => this.alertVisible = false, 2000)
      this.alertVisible = true
    },
    todoGet() {
      this.todos = JSON.parse(localStorage.getItem("todolist"));
    },
    todoIdGenerate() {
      this.newTodo.id = Math.ceil(Math.random() * 1000000)
    },
    todoAdd() {
      if (!this.todos == []) {
        this.todos.push(this.newTodo)
      } else {
        this.todos = []
        this.todos.push({
          id: this.newTodo.id,
          title: this.newTodo.title,
          comment: this.newTodo.comment,
          status: this.newTodo.status,
        })
      }
      this.newTodo = {
        title: null,
        comment: null,
        status: "Pending",
      }
      this.todoIdGenerate()
      this.todoSubmit()
      this.alertInit("success")
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
