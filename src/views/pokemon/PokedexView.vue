<template>
  <section class="pokedex" v-if="!loading">
    <h1 class="justify-center text-center mb-5 pokedex__title">My Pokédex</h1>
    <div class="mt-5 pt-5 cards" v-if="pokedex.length">
      <div class="flex flex-wrap justify-center	">
        <pokemon-card
            v-for="(item, index) in pokedex"
            :key="index"
            :name="item.name"
            :image="item.image"
            allow-remove-from-pokedex
        />
      </div>
    </div>
    <h2 v-else class="justify-center text-center mt-5 text-xl">
      Empty
    </h2>
  </section>
</template>

<script>
import {mapState} from 'vuex';
import PokemonCard from '@/components/pokemon/card/PokemonCard.vue';

export default {
  name: 'PokedexView',
  components: { PokemonCard},
  computed: {
    ...mapState(['loading']),
    ...mapState('pokemon', ['pokedex'])
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
.pokedex {
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
    font-size: 2.5rem;
  }
}

</style>
