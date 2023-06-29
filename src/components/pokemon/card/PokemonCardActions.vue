<template>
  <section class="pokemon-card-actions">
    <div v-if="haveOnPokedex(name)">
        <pokemon-card-action-button
            v-if="allowRemoveFromPokedex"
            @click.stop="removeFromPokedex(name)"
            tooltip="Remove Pokemon from My Pokedex"
            icon="trash"
        />
      <pokemon-card-action-button
          v-else
          tooltip="Pokemon is in your Pokedex"
          icon="check"
          :read-only="true"
      />
    </div>
    <pokemon-card-action-button
        v-else
        @click.stop="addToPokedex(name)"
        tooltip="Add Pokemon to My Pokedex"
        icon="plus"
    />

  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import PokemonCardActionButton from '@/components/pokemon/card/PokemonCardActionButton.vue';

export default {
  name: 'PokemonCardActions',
  components: {PokemonCardActionButton},
  props: {
    name: {
      type: String,
      required: true,
    },
    allowRemoveFromPokedex: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    ...mapGetters('pokemon', ['haveOnPokedex'])
  },
  methods: {
    ...mapActions('pokemon', ['addToPokedex','removeFromPokedex']),
  }
}
</script>

<style scoped lang="scss">

</style>
