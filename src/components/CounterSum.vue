<template>
  <div class="container">
    <span>{{total}}</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
