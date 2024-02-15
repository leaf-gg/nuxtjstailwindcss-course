<template>
  <div class="border rounded-md bg-blue-300 flex justify-around p-4 font-bold">
    <Logo />
    <AppMenu :options="options"/>
    <Profile />
  </div>
</template>

<script>
import Logo from '../common/Logo.vue'
import AppMenu from '~/common/AppMenu.vue';
import Profile from '~/common/Profile.vue';

export default {
  components: { Logo, AppMenu, Profile },
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
