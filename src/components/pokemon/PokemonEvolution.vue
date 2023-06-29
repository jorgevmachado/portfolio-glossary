<template>
  <div class="pokemon-evolution">
    <h3 class="pokemon-evolution__title">EVOLUTION:</h3>
    <hr class="mt-5 mb-5">
    <div class="flex flex-center flex-wrap content-center justify-center">
      <div v-for="evolution in evolutions" :key="evolution.name" class="mx-5 my-3">
        <img :src="evolution.image" alt="evolutions" class="pokemon-evolution__image">
        <h5 class="text-center">{{evolution.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PokemonEvolution',
  props: {
    evolutions: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/colors';
.pokemon-evolution {
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
  }
  &__image {
    width: 150px;
    height: 150px;
  }
}
</style>
