<template>
  <div>
    <h1 class="text-2xl text-center pt-4">About</h1>
    <p class="poppins p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit autem molestias repellendus minima iure aliquid ad temporibus itaque nulla esse, maiores officia nobis dolor sint hic cumque beatae delectus adipisci?</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head: {
    link: [
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">',
    ],
    script: [{type: "text/javascript", src: 'hello.js'}],
  },
}
</script>
<style scoped>
    .poppins{
        font-family: 'Poppins', 'sans-serif';
    }
</style>
