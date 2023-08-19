<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  beforeDestroy() {
  },
  created() {
    if (!this.$socket) return
    this.sockets.subscribe('welcome', data => { // 组件内监听
      this.$notify.info({
        title: '消息',
        message: data
      })
    })
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
