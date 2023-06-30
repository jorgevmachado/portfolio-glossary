<template>
  <section v-if="character">
    <h1>{{character.name}}</h1>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'StarWarsDetailsView',
  data() {
    return {
      character: {},
    };
  },
  mounted() {
    this.character = this.characters.find((item) => item.name === this.name);
  },
  computed: {
    ...mapGetters('starWars', ['characters']),
    name() {
      return this.$route.params.name;
    },
  }
}
</script>

<style scoped lang="scss">

</style>
