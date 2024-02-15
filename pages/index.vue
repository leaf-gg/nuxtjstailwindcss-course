<template>
  <div>
    <h1 class="text-2xl text-center font-bold mb-3">Welcome to the app!</h1>
    <div v-if="!loggedIn">
      <p>To access all the resources, you need to login</p>
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
    <div v-else class="text-center">
      {{ userName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Main app page',
      },
    ],
    title: 'Main',
  },
  computed:{
    loggedIn() {
      return this.$store.getters.isLogged;
    },
    userName(){
      return this.$store.state.user.name;
    }
  }

}
</script>
