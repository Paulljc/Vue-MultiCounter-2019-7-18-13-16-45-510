import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    countSum: 0
  },
  mutations:{
    increment (state) {
      state.countSum++
    },
    decrease (state){
      state.countSum--
    }
  },
  actions:{
    increment (context) {
      context.commit('increment')
    },
    decrease (context) {
      context.commit('decrease')
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
