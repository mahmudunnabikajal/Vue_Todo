<template>
  <div id="app">
    <div class="header">
      <nav class="navbar">
        <router-link :to="{ name:'home' }">Home</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  padding: 15px 0;
  background: #ef9a53;
}
.navbar {
  a {
    font-weight: 500;
    color: #fff;
    padding: 0px 10px;
    margin: 0px 10px;
    background: #ef9a53;
    text-decoration: none;
    letter-spacing: 1.1px;
    &.router-link-exact-active {
      color: #222;
    }
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form-control {
  padding: 10px;
  margin: 5px;
}
.btn-remove {
  padding: 5px 10px;
  margin: 0 5px;
  background: #dc3535;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
.btn-edit {
  padding: 5px 10px;
  margin: 0 5px;
  background: #35b5dc;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
.btn-submit {
  padding: 5px 10px;
  margin: 0 5px;
  background: #5f8d4e;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
</style>
