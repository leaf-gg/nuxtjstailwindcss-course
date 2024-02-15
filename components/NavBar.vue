<template>
  <div class="border rounded-md bg-blue-300 flex justify-around p-4 font-bold">
    <Logo />
    <AppMenu :options="options"/>
    <p class="ml-auto">
      <nuxt-link to="/login">Login</nuxt-link>
    </p>
  </div>
</template>

<script>
import Logo from '../common/Logo.vue'
import AppMenu from '~/common/AppMenu.vue';
export default {
  components: { Logo, AppMenu },
  data(){
    return {
      options: [
        {text: 'Home', url: '/'},
        {text: 'Products', url: '/products'},
        {text: 'About', url: '/about'}

      ]
    }
  }
}
</script>

<style></style>
