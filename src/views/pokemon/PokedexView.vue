<template>
  <section class="pokedex" v-if="!loading">
    <h1 class="justify-center text-center mb-5 pokedex__title">My Pokédex</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-if="pokedex.length">
      <card-glossary
          v-for="(item, index) in pokedex"
          :key="index"
          :isInBag="haveOnBag(item)"
          :item="item"
          @add="addToBag"
          @remove="removeFromBag"
          background-color="#68a198"
          image-center
          allow-remove-from-bag/>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-else>
      <span class="font-bold text-lg flex justify-center mb-5 text-black">Not Pokemon Find</span>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CardGlossary from '@/components/shared/card/CardGlossary.vue';

export default {
  name: 'PokedexView',
  components: {CardGlossary},
  computed: {
    ...mapState(['loading']),
    ...mapState('pokemon', ['pokedex']),
    ...mapGetters('pokemon', ['haveOnPokedex'])
  },
  methods: {
    ...mapActions({
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
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
.pokedex {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
    font-size: 2.5rem;
  }
}

</style>
