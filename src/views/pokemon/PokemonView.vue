<template>
  <section class="pokemon" v-if="!loading">
    <div class="mt-5 pt-5 cards" v-if="pokemons.length">
      <div class="flex flex-wrap justify-center	">
        <pokemon-card
            v-for="(item, index) in pokemons"
            :key="index"
            :title="item.name"
            :image="item.image"
            @click.stop="expand(item.name)"/>
      </div>
    </div>
  </section>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import PokemonCard from '@/components/pokemon/card/PokemonCard.vue';

export default {
  name: 'PokemonView',
  components: { PokemonCard},
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

