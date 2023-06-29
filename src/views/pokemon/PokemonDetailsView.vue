<template>
  <section class="grid pokemon-details">
    <div v-if="pokemon" class="mt-20">
      <div class="pokemon-details__close">
        <a
            class="pokemon-details__close-button shadow flex-center"
            @click="$router.go(-1)"
        >
          <font-awesome-icon icon="close" class="pokemon-details__close-icon ml-5 mt-4 text-lg" />
        </a>
      </div>
      <div class="pokemon-details__header">
        <img :src="pokemon ? pokemon.image : null" alt="pokemon">
        <h1 class="mt-4 pokemon-details__header-title">{{pokemon.name}}</h1>
      </div>
      <div class="pokemon-details__container">
        <hr class="mt-20 mb-5">
        <pokemon-types class="mb-5" :types="pokemon.types"/>
        <pokemon-info class="mb-5" :height="pokemon.height" :weight="pokemon.weight"/>
        <pokemon-stats class="mb-5" :stats="pokemon.stats"/>
        <pokemon-evolution class="mb-5" v-if="evolutions.length" :evolutions="evolutions"/>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import PokemonTypes from '@/components/pokemon/PokemonTypes.vue';
import PokemonInfo from '@/components/pokemon/PokemonInfo.vue';
import PokemonStats from '@/components/pokemon/PokemonStats.vue';
import PokemonEvolution from '@/components/pokemon/PokemonEvolution.vue';

export default {
  name: 'PokemonDetailsView',
  components: {
    PokemonTypes,
    PokemonInfo,
    PokemonStats,
    PokemonEvolution,
  },
  data() {
    return {
      evolutions: [],
    };
  },
  async created() {
    this.evolutions = await this.getEvolutionsByName(this.pokemon.name)
  },
  computed: {
    ...mapGetters('pokemon', ['getPokemonByName']),
    name() {
      return this.$route.params.name;
    },
    pokemon() {
      return this.getPokemonByName(this.name);
    },
  },
  methods: {
    ...mapActions('pokemon', ['getEvolutionsByName']),
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/colors';
.pokemon-details {
  top: 0;
  left: 0;
  background: $pokemon-secondary;
  min-height: 100%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: auto;
  &__close {
    &-button{
      background: #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: #68a198;
      position: fixed;
      top: 20%;
      right: 5%;
      transition: all 0.2s;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background: $pokemon-secondary;
        color: #fff;
      }
    }
    &-icon {
    }
  }
  &__header {
    position: absolute;
    width: 200px;
    height: 200px;
    margin-left: 50rem;
    margin-top: -8rem;
    z-index: 99;
    &-title {
      color: $pokemon-secondary;
      font-weight: 500;
      font-size: 2.5rem;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    padding: 3rem;
    border-radius: 30px;
    background: #fff;
    border: none;
    margin: 1rem 2rem 1rem 1rem;
    cursor: pointer;
    transition: all 0.4s;
  }
}
</style>
