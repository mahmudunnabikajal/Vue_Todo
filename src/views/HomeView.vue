<template>
  <div>
    <div>
      <p>
        Todo With Localstorage
        <router-link :to="{ name:'todo-localstorage' }">View</router-link>
      </p>
      <p>
        Todo With Localstorage Vuex
        <router-link :to="{ name:'todo-localstorage-vuex' }">View</router-link>
      </p>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {},
  computed: {

  },
  methods: {

  }
}
</script>
