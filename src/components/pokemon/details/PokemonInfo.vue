<template>
  <div class="pokemon-info">
    <h3 class="pokemon-info__title">INFO:</h3>
    <div class="grid grid-rows-2 grid-flow-col gap-2">
    <p>
      Height:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{formatted(height)}} M
      </span>
    </p>
      <p>
      Weight:
        <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{formatted(weight)}} KG
      </span>
    </p>
    </div>


    <hr class="mt-5 mb-5">
  </div>
</template>

<script>
export default {
  name: 'PokemonInfo',
  props: {
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    }
  },
  methods: {
    formatted(value) {
      return value /10;
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/colors';
.pokemon-info {
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
  }
}
</style>
