<template>
  <div id="product-list-one">
      <h2>Product list one</h2>
      <ul>
          <li v-bind:key="product.name" v-for="product in saleProducts">
              <span class="name">{{ product.name }}</span>
              <span class="price">US {{ product.price }}</span>
          </li>
      </ul>
      <button v-on:click="reducePrice(6)">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
      products() {
          return this.$store.state.products;
      },
    //   saleProducts() {
    //       var saleProduct = this.$store.state.products.map(product => {
    //             return {
    //               name:'**' + product.name + '**' ,
    //               price: product.price/2
    //             }
    //       });
    //       return saleProduct;
    //   }
    saleProducts() {
        return this.$store.getters.saleProducts;
    }
  },
  methods: {
      reducePrice: function(amount) {
        //   this.$store.state.products.forEach( product => {
        //       product.price -= 1;
        //   })

        //this.$store.commit('reducePrice');

        this.$store.dispatch('reducePrice', amount)
      }
  }
}
</script>


<style>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
