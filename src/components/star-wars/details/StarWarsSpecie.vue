<template>
  <section class="star-wars-specie">
    <h1 class="  star-wars-specie__title text-xl">SPECIE:</h1>
    <span v-for="(item, index) in species" :key="index" class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-6 py-5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
      {{item.name}}
    </span>
    <hr class="mb-5 mt-5">
  </section>
</template>

<script>
export default {
  name: 'StarWarsSpecie',
  props: {
    species: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
.star-wars-specie {
  &__title {
    color: #ffff00;
  }
}
</style>
