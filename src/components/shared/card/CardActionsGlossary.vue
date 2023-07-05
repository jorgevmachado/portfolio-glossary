<template>
  <section class="pokemon-card-actions">
    <div v-if="isInBag">
      <card-actions-button-glossary
          v-if="allowRemoveFromBag"
          @click="remove(item)"
          :color="color"
          tooltip="Remove item from bag"
          icon="trash"
      />
      <card-actions-button-glossary
          v-else
          :color="color"
          tooltip="item is in your bag"
          icon="check"
          :read-only="true"
      />
    </div>
    <div v-else>
      <card-actions-button-glossary
          v-if="noAction"
          :color="color"
          tooltip="no action for your item"
          :icon="customIcon"
          :read-only="true"
      />
      <card-actions-button-glossary
          v-else
          :color="color"
          @click="add(item)"
          tooltip="Add item to you bag"
          icon="plus"
      />
    </div>


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
    },
    noAction: {
      type: Boolean,
      default: false,
    },
    customIcon: {
      type: String,
      default: 'check',
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
