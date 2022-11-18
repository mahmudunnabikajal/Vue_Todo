<template>
  <div>
    {{ $route.params }}
    <!-- {{ this.todos }} -->
    <div class="todo-create flex-center">
      <!-- <form @submit.prevent="todoEdit">
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
      </form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoEdit',
  date() {
    return {
    }
  },
  components: {},
}
</script>
