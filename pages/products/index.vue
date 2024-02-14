<template>
  <div>
    <p>All products</p>
      <ul>
        <li v-for="product, key in products" :key="key">
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
