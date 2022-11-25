<template>
  <div>
    <AlertToastr :type="this.alertToaster" v-show="alertVisible"></AlertToastr>
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
import AlertToastr from "@/components/AlertToastr.vue"
export default {
  name: 'TodoEdit',
  data() {
    return {
      todoEditId: this.$route.params.id,
      todoIndex: this.$route.params.index,
      todos: [],
      editTodo: {
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
    this.todoGetById()
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
    todoGetById() {
      this.editTodo = this.todos.find(item => {
        return item.id == this.todoEditId
      })
    },
    updateTodo() {
      let indexNumber = this.todoIndex
      let editTodo = {
        id: this.editTodo.id,
        title: this.editTodo.title,
        comment: this.editTodo.comment,
        status: this.editTodo.status,
      }
      if (this.todoGetById && this.todoIndex) {
        this.todos.splice(indexNumber, 1, editTodo)
        this.todoSubmit()
        this.alertInit("success")
      } else if (indexNumber == 0) {
        this.todos.shift()
        this.todos.unshift(editTodo)
        this.todoSubmit()
        this.alertInit("success")
      } else {
        this.alertInit("error")
      }
    },
    todoSubmit() {
      let newTodoStringify = JSON.stringify(this.todos);
      localStorage.setItem("todolist", newTodoStringify);
    }
  }
}
</script>
