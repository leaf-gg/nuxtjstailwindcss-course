<template>
  <div class="flex items-center">
    <img class="w-8 border rounded-full" :src="image" alt="" />
    <p class="ml-2 poppins">{{text}}</p>
  </div>
</template>

<script>
export default {
  buildModules: ['@nuxtjs/tailwindcss'],
  props: {
    image: {
      type: String,
      default:
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Tulliana_launch.png',
    },

    text: {
        type: String,
        default: 'Rocket LTDA'
    }
  },

  head: {
    link: [
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">',
    ],
  },
}
</script>

<style scoped>
  .poppins{
    font-family: 'Poppins', 'sans-serif';
  }

</style>
