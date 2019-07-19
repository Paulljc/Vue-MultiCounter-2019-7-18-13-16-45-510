<template>
  <div class="container">
    <button @click="change(1)"> + </button>
    <span v-text="number"/>
    <button @click="change(-1)"> - </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  props: {
    total: Number
  },
  methods: {
    change(v) {
      this.number += v;
      this.$emit("update:total", this.total + v)
    }
  }
}
</script>

<style scoped>
</style>