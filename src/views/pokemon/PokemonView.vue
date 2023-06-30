<template>
  <section class="pokemon" v-if="!loading">
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-if="pokemons.length">
      <pokemon-search class="mt-8 mb-5 justify-center"/>
      <card-glossary
          v-for="(item, index) in pokemons"
          :key="index"
          @click.stop="expand(item.name)"
          :isInBag="haveOnBag(item)"
          :item="item"
          @add="addToBag"
          @remove="removeFromBag"
          background-color="#68a198"
          image-center/>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-else>
      <span class="font-bold text-lg flex justify-center mb-5 text-black">Not Pokemon Find</span>
    </div>
  </section>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CardGlossary from '@/components/shared/card/CardGlossary.vue';
import PokemonSearch from '@/components/pokemon/PokemonSearch.vue';

export default {
  name: 'PokemonView',
  components: { PokemonSearch, CardGlossary},
  created() {
    this.fetchPokemons();
  },
  computed: {
    ...mapState(['loading']),
    ...mapState('pokemon', ['pokemons']),
    ...mapGetters('pokemon', ['haveOnPokedex'])
  },
  methods: {
    ...mapActions({
      fetchPokemons: 'pokemon/fetchPokemons',
      addToPokedex: 'pokemon/addToPokedex',
      removeFromPokedex: 'pokemon/removeFromPokedex',
    }),
    addToBag(item) {
      this.addToPokedex(item.name);
    },
    removeFromBag(item) {
      this.removeFromPokedex(item.name);
    },
    haveOnBag(item) {
      return this.haveOnPokedex(item.name);
    },
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

