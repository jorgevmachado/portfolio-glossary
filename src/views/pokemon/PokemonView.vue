<template>
  <section class="pokemon" v-if="!loading">
    <pokemon-search class="mt-8 mb-5 justify-center"/>
    <div class="mt-5 pt-5 cards" v-if="pokemons.length">
      <div class="flex flex-wrap justify-center">
        <pokemon-card
            v-for="(item, index) in pokemons"
            :key="index"
            :name="item.name"
            :image="item.image"
            @click.stop="expand(item.name)"/>
      </div>
    </div>
    <div class="mt-5 pt-5 justify-center" v-else>
      <h1>EMPTY</h1>
    </div>
  </section>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import PokemonCard from '@/components/pokemon/card/PokemonCard.vue';
import PokemonSearch from '@/components/pokemon/PokemonSearch.vue';

export default {
  name: 'PokemonView',
  components: { PokemonCard, PokemonSearch},
  created() {
    this.fetchPokemons();
  },
  computed: {
    ...mapState(['loading']),
    ...mapState('pokemon', ['pokemons']),
  },
  methods: {
    ...mapActions('pokemon', ['fetchPokemons']),
    expand(name) {
      this.$router.push({
        name: 'App.Pokemon.Detail',
        params: {
          name,
        },
      });
    }
  },
}
</script>

<style lang="scss">
.pokemon {
  .cards {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>

