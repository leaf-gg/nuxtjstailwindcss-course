<template>
  <div>
    <h1 class="text-2xl text-center">Login</h1>
    <nuxt-link to="/">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  // layout: 'no-nav'

  async fetch() {
    return await this.$axios
      .get('http://localhost:5000/users')
      .then((response) => {
        this.$store.dispatch('setUser', response.data[0])
      })
  },
  head() {
    return {
      title: 'Login Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'test description on component',
        },
      ],
    }
  },
}
</script>
