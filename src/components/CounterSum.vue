<template>
  <div class="container">
    <span>{{total}}</span>
  </div>
</template>

<script>
export default {
  // props: {
  //   total: {
  //     type: Number,
  //     default: 0
  //   }
  // },
  computed:{
    total(){
      return this.$store.state.countSum
    }
  }
}
</script>

<style scoped>

</style>
