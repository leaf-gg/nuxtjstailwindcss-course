<template>
  <div>
    <div v-if="!$fetchState.error">
      <p>
        Details of : <span class="uppercase">{{ pokemon.name }}</span>
      </p>
      <ul>
        <strong>Abilities</strong>
        <li v-for="(ability, akey) in pokemon.abilities" :key="akey">
          {{ ability.ability.name }}
        </li>
      </ul>
      <p><strong>Height (m):</strong> {{ pokemon.height }}</p>
      <p><strong>Weight (lb):</strong> {{ pokemon.weight }}</p>
      <strong>Sprites</strong>
      <img :src="pokemon.sprites.front_default" alt="" />
      <img :src="pokemon.sprites.back_default" alt="" />
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        alt=""
      />
    </div>
    <div v-else>
      <p>Unable to load Pokemon {{ name }} data. Please, try again later.</p>
      <p>Error: {{ $fetchState.error.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pokemon: {}
    }
  },
  async fetch(){
    const result = await this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
    // console.log(result.data);
    const { name, abilities, sprites, height, weight, moves } = result.data;
    this.pokemon = {
      name, abilities, sprites, height, weight, moves
    };
  },  

  head() {
    return {
    title: `Detalhes de ${this.name}`,
    meta: [
      { 
        hid: 'description',
        name: 'description',
        content: `Pokemon ${this.pokemon.name}, Weight: ${this.pokemon.weight}, Height: ${this.pokemon.height}` 
      }
      ]
    }
  },

  computed: {
    name(){
      return this.$route.params.name;
    }
  },

}
</script>

<style></style>
