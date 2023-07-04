<template>
  <section class="star-wars-info">
    <h1 class="star-wars-info__title text-xl">INFO:</h1>
    <p class="star-wars-info__title ml-12 text-lg">
      Birth Year:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{birthYear}}
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg" v-if="!isNa">
      Eye Color:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{eyeColor}}
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg" v-if="!isNa">
      Skin Color:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{skinColor}}
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg" v-if="isNa">
      Hair Color:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{hairColor}}
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg" v-if="isNa">
      Gender:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{gender}}
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg">
      Height:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{height}} CM
      </span>
    </p>
    <p class="star-wars-info__title ml-12 text-lg">
      Mass:
      <span class="mt-5 mr-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {{mass}} KG
      </span>
    </p>
    <hr class="mb-5 mt-5">
  </section>
</template>

<script>
export default {
  name: 'StarWarsInfo',
  props: {
    birthYear: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
      required: true,
    },
    hairColor: {
      type: String,
      required: true,
    },
    skinColor: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    mass: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatted(value) {
      return value /10;
    },
    isNa(value) {
      return value === 'n/a';
    }
  }
}
</script>

<style scoped lang="scss">
.star-wars-info {
  &__title {
    color: #ffff00;
  }
}
</style>
