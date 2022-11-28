<template>
  <div>
    <!-- <AlertToastr :type="this.alertToaster" v-show="alertVisible"></AlertToastr> -->
    <h2>Todo Edit</h2>
    <div class="todo-create flex-center">
      <form @submit.prevent="todoUpdate">
        <input class="form-control" type="text" v-model="$store.state.editTodo.id" disabled required />
        <input class="form-control" type="text" v-model="$store.state.editTodo.title" placeholder="Write Title" required />
        <input class="form-control" type="text" v-model="$store.state.editTodo.comment" placeholder="Write Comment" required />
        <select class="form-control" v-model="$store.state.editTodo.status" required>
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
import store from '@/store'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'TodoEdit',
  data() {
    return {}
  },
  created() {
    store.getters.todoGet
    this.todoGetEditInfo()
  },
  components: {},
  computed: {
    ...mapState([
      'todos'
    ])
  },
  methods: {
    ...mapActions([
      'todoUpdate'
    ]),
    todoGetEditInfo() {
      store.state.todoEditId = this.$route.params.id,
        store.state.todoEditIndex = this.$route.params.index
      store.state.editTodo = store.state.todos.find(item => {
        return item.id == store.state.todoEditId
      })
    }
  }
}
</script>
