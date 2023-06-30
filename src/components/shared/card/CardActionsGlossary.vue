<template>
  <section class="pokemon-card-actions">
    <div v-if="isInBag">
      <card-actions-button-glossary
          v-if="allowRemoveFromBag"
          @click="remove(item)"
          :color="color"
          tooltip="Remove Pokemon from My Pokedex"
          icon="trash"
      />
      <card-actions-button-glossary
          v-else
          :color="color"
          tooltip="Pokemon is in your Pokedex"
          icon="check"
          :read-only="true"
      />
    </div>
    <card-actions-button-glossary
        v-else
        :color="color"
        @click="add(item)"
        tooltip="Add Pokemon to My Pokedex"
        icon="plus"
    />

  </section>
</template>

<script>
import CardActionsButtonGlossary from '@/components/shared/card/CardActionButtonGlossary.vue';

export default {
  name: 'CardActionsGlossary',
  components: {CardActionsButtonGlossary},
  props: {
    item: {
      type: Object,
      required: true,
    },
    allowRemoveFromBag: {
      type: Boolean,
      default: false,
    },
    isInBag: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#fff',
    }
  },
  methods: {
    add(field) {
      this.$emit('add', field);
    },
    remove(field) {
      this.$emit('remove', field);
    }
  }
}
</script>

<style lang="scss"></style>
