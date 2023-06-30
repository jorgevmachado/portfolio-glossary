<template>
<div class="pokemon-types">
  <h3 class="pokemon-types__title">TYPES:</h3>
  <span v-for="(item, index) in types" :key="index" class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-6 py-5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
    {{item.type.name}}
  </span>
  <hr class="mb-5 mt-5">

</div>
</template>

<script>
export default {
  name: 'PokemonTypes',
  props: {
    types: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/colors';
.pokemon-types {
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
  }
}
</style>
