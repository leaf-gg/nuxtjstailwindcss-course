<template>
  <div class="ml-auto flex items-center">
    <NuxtLink
      v-for="(option, key) in options"
      :key="key"
      :to="option.url"
      class="mr-2 hover:bg-white p-1 rounded-md transition ease-in-out"
      >{{ option.text }}</NuxtLink>
  </div>
</template>

<script>
export default {
    props: {

        options: {
            type: Array,
            default: () => [
                { text: 'item1', url:'#'},
                { text: 'item2', url:'#'},
                { text: 'item2', url:'#'},
            ]
        }
    }
}
</script>

<style scoped>
    .nuxt-link-exact-active{
        color: blue;
    }
</style>
