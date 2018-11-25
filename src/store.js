import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Banana skins', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80},
      {name: 'buah mangga' , price: 15}
    ]
  },
  getters: {
    saleProducts: state=> {
        var saleProduct = state.products.map(product => {
              return {
                name:'--' + product.name + '--' ,
                price: product.price/2
              }
        });
        return saleProduct;
    }
  },
  mutations: {
    reducePrice: state=>{
      state.products.forEach(product => {
        product.price -= 1;
      })
    }

  },
  actions: {

  }
})
