<template>
  <section class="star-wars-films">
    <h1 class="star-wars-films__title text-xl">FILMS:</h1>
    <p class="star-wars-films__title ml-12 text-lg" v-for="(item, index) in films" :key="index">
      {{item.title}} Episode {{item.episode_id}}
    </p>
    <hr class="mb-5 mt-5">
  </section>
</template>

<script>
export default {
  name: 'StarWarsFilms',
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.star-wars-films {
  &__title {
    color: #ffff00;
  }
}
</style>
