<template>
  <div id="app">
    <input v-model.number="number"/>
    <CounterSum :total="total"/>
    <CounterGroup :counterNum="numberNum" :total.sync="total"/>
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup.vue'
import CounterSum from './components/CounterSum.vue'

export default {
  name: 'app',
  data() {
    return {
      number: 0,
      total: 0
    }
  },
  components: {
    CounterGroup,
    CounterSum
  },
  computed: {
    numberNum() {
      return typeof this.number === 'number' ? 
        (this.number >= 0 ? this.number : 0) : 0
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
