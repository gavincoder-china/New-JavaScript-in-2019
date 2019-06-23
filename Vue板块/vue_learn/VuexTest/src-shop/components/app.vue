<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <products></products>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
  import products from './products.vue'
  import cart from './cart.vue'

  export default {
    components: {
      products,
      cart
    }
  }
</script>