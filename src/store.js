import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name: 'Banana skins', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80},
      {name: 'buah mangga', price: 70}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
