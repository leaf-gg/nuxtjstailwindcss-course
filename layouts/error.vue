<template>
    <div class="p-4">
      <h1>A error ocurred</h1>
        <h2 v-if="error.statusCode === 404" >This page can't be found.</h2>
        <h2 v-else>{{ error.message }}</h2>
        <nuxt-link to="/">Back to home</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'no-nav',
    props: {
        error: {
            type: Object,
            default: null
        },
    }
  }
  </script>
  
  <style>
  
  </style>