<template>
  <div class="container">
    <button @click="increase"> + </button>
    <span v-text="number"/>
    <button @click="decrease"> - </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  // props: {
  //   total: Number
  // },
  methods: {
    // change(v) {
    //   this.number += v;
    //   this.$emit("update:total", this.total + v)
    // }
    increase(){
      this.number++;
      this.$store.dispatch('increment')
    },
    decrease(){
      this.number--;
      this.$store.dispatch('decrease')
    }
  }
}
</script>

<style scoped>
</style>