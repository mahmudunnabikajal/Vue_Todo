<template>
  <div>
    <div class="alert-toastr">
      <div class="alert-box success" v-if="type == 'success'">
        <p class="title">Success</p>
      </div>
      <div class="alert-box error" v-if="type == 'error'">
        <p class="title">Error</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertToastr',
  components: {},
  data() {
    return {
      // alertVisible: true
    }
  },
  created() {

  },

  props: {
    type: String
  }
}
</script>
<style lang="scss" scoped>
.alert-toastr {
  position: absolute;
  top: 30px;
  right: 10px;
  .alert-box {
    padding: 20px 30px;
    font-size: 20px;
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 2px 5px 5px 1px rgb(100, 99, 99);
    &.success {
      background: #285430;
    }
    &.error {
      background: #dc3535;
    }
  }
}
</style>
