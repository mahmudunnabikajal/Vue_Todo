<template>
  <div>
    <h2>Todo Create</h2>
    <div class="todo-create flex-center">
      <form @submit.prevent="todoAdd">
        <input class="form-control" type="text" v-model="$store.state.newTodo.id" disabled required />
        <input class="form-control" type="text" v-model="$store.state.newTodo.title" placeholder="Write Title" required />
        <input class="form-control" type="text" v-model="$store.state.newTodo.comment" placeholder="Write Comment" required />
        <select class="form-control" v-model="$store.state.newTodo.status" required>
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
import store from "@/store";
import { mapActions } from "vuex";
export default {
  name: "TodoCreate",
  data() {
    return {};
  },
  created() {
    store.getters.todoGet;
  },
  methods: {
    ...mapActions(["todoAdd"]),
  },
};
</script>
<style lang="scss" scoped></style>
