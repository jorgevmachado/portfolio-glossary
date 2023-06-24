<template>
  <div class="pokemon">
    <h1>POKEMON</h1>
  </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  name: 'PokemonView',
  created() {
    this.fetchPokemons();
  },
  methods: {
    ...mapActions('pokemon', ['fetchPokemons']),
  },
}
</script>

<style lang="scss">

</style>

