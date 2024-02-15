<template>
  <div class="mx-auto items-center flex flex-col">
    <p class="text-2xl font-semibold mb-5">All products</p>
      <ul>
        <li v-for="product, key in products" :key="key" class="hover:bg-blue-400 hover:text-white border w-64 rounded-md p-1 my-1">
          <nuxt-link :to="`/products/${product.codigo}`">
            {{ product.titulo }}
          </nuxt-link>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .get('http://localhost:5000/products')
      .then((response) => ({
        products: response.data,
      }))
      .catch(e => {
        context.error({statusCode: 503, message: "Unable to get data, please try again later"})
      })
  },
}
</script>

<style></style>
