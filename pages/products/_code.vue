<template>
  <div>
      <p class="my-5 font-bold">Product details</p>
      <div v-if="!$fetchState.error" class="flex">
          <img class="w-2/5 rounded-md mb-1 mr-4" :src="produto.foto" alt="">
        <div class="w-3/5">
          <p class="text-sm font-thin mb-1">Code: {{produto.codigo}}</p>
          <p class="text-2xl font-bold mb-1">{{produto.titulo}}</p>
          <p class="mb-1">Descrição: {{produto.descricao}}</p>
          <p class="text-3xl font-bold font-mono mb-9">{{price_val}}</p>
          <nuxt-link class="rounded-lg bg-blue-300 p-4 text-xs my-5" to="/products">back</nuxt-link>
        </div>
  
      </div>
      <div v-else>
        <p>can't load product data. Please try again later !</p>
        <p>Error: {{$fetchState.error.message}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      produto : {}
    }
  },
  fetch(){
    return this.$axios.get(`http://localhost:5000/products?codigo=${this.codg_prod}`)
      .then(response => {
        this.produto = response.data[0];
        return true;
      })
  },
  computed: {
    codg_prod() {
      return this.$route.params.code;
    },
    price_val(){
      return this.produto.preco ?
        Intl.NumberFormat('pt-BR', { style: "currency",  currency: 'BRL'}).format(this.produto.preco) 
        : 'Preço não definido';
    }   
  },
}
</script>

<style>

</style>