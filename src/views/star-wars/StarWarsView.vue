<template>
  <section class="star-wars" v-if="!loading">
    <h1 class="justify-center text-center mt-10 mb-5 text-lg">My Star Wars</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-if="characters.length">
      <card-glossary
          v-for="(item, index) in characters"
          :key="index"
          :isInBag="false"
          :item="item"
          image-center
          background-color="#000"
          @click.stop="expand(item.name)"
          allow-remove-from-bag>
      </card-glossary>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-else>
      <span class="font-bold text-lg flex justify-center mb-5 text-black">not product find</span>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CardGlossary from '@/components/shared/card/CardGlossary.vue';

export default {
  name: 'StarWarsView',
  components: {CardGlossary},
  created() {
    this.fetchCharacters();
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters('starWars', ['characters']),
  },
  methods: {
    ...mapActions({
      fetchCharacters: 'starWars/fetchCharacters',
    }),
    expand(name) {
      this.$router.push({
        name: 'App.StarWars.Detail',
        params: {
          name,
        },
      });
    }
  }
}
</script>

<style scoped lang="scss">
.star-wars {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
