<template>
  <section class="star-wars-homeworld">
    <h1 class="star-wars-homeworld__title text-xl">HOMEWORLD:</h1>
    <p class="star-wars-homeworld__title ml-12 text-lg">
      Planet:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.name}}
      </span>
    </p>
    <p class="star-wars-homeworld__title ml-12 text-lg" v-if="!unknown(homeworld.population)">
      Population:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.population}}
      </span>
    </p>
    <p class="star-wars-homeworld__title ml-12 text-lg" v-if="!unknown(homeworld.terrain)">
      Terrain:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.terrain}}
      </span>
    </p>
    <p class="star-wars-homeworld__title ml-12 text-lg" v-if="!unknown(homeworld.rotation_period)">
      Rotation Period:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.rotation_period}}H
      </span>
    </p>
    <p class="star-wars-homeworld__title ml-12 text-lg" v-if="!unknown(homeworld.climate)">
      Climate:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.climate}}
      </span>
    </p>
    <p class="star-wars-homeworld__title ml-12 text-lg" v-if="!unknown(homeworld.gravity)">
      Gravity:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{homeworld.gravity}}
      </span>
    </p>
    <hr class="mb-5 mt-5">
  </section>
</template>

<script>

export default {
  name: 'StarWarsInfo',
  props: {
    homeworld: {
      type: Object,
      required: true,
    },
  },
  methods: {
    unknown(value = '') {
      return value === 'unknown';
    }
  }
}
</script>

<style scoped lang="scss">
.star-wars-homeworld {
  &__title {
    color: #ffff00;
  }
}
</style>
