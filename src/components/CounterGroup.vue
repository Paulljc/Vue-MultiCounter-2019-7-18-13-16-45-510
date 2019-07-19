<template>
  <div class="container">
    <Counter v-for="i in counterNum" :key="i" :total.sync="sum"/>
  </div>
</template>

<script>
import Counter from './Counter'
export default {
  components: {
    Counter
  },
  props: {
    counterNum: {
      type: Number,
      default: 1
    },
    total: Number
  },
  computed: {
    sum: {
      get() {
        return this.total
      },
      set(v) {
        this.$emit("update:total", v)
      }
    }
  }
}
</script>

<style scoped>
</style>