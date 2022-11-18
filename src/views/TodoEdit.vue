<template>
  <div>{{this.todoId}}</div>
</template>

<script>

export default {
  name: 'TodoEdit',
  date() {
    return {
      todoId: this.$route.params.id
    }
  },
  components: {},
  created() {
  }
}
</script>
