<template>
  <div class="pokemon-stats">
    <h3 class="pokemon-stats__title">STATS:</h3>
    <div class="grid grid-cols-2 mb-5 mt-5" v-for="(item, index) in stats" :key="index">
      <div class="ml-8">{{ transformAttributeName(item.stat.name) }}</div>
      <div style="width: 80%">
        <progress-glossary :value="item.base_stat"/>
      </div>

    </div>




    <hr class="mb-5 mt-5">
  </div>
</template>

<script>
import ProgressGlossary from '@/components/shared/ProgressGlossary.vue';
import utils from 'eslint-plugin-vue/lib/utils/casing';

export default {
  name: 'PokemonStats',
  components: {
    ProgressGlossary,
  },
  props: {
    stats: {
      type: Array,
      required: true,
    }
  },
  methods: {
    transformAttributeName(value) {
      const words = value.split('-').map((item) => utils.capitalize(item));
      return words.join(' ');
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/colors';
.pokemon-stats {
  &__title {
    color: $pokemon-secondary;
    font-weight: 500;
  }
}
</style>
