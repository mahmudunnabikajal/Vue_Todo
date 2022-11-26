<template>
  <div>
    <div class="d-flex">
      <p>Todo With Localstorage</p>
      <nav class="navbar">
        <router-link :to="{ name:'todo-localstorage' }">View</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
