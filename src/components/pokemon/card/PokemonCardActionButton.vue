<template>
  <button :class="classList" class="btn" :title="tooltip">
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  name: 'PokemonCardActionButton',
  data() {
    return {};
  },
  props: {
    readOnly: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      required: true,
    },
  },
  computed: {
    classList() {
      return {
        shadow: true,
        'read-only': this.readOnly,
        'flex-center': true,
        'action-button': true,
      };
    },
  }
}
</script>

<style lang="scss">
$custom-primary: #df1818;
$custom-secondary: #68a198;
.action-button {
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: $custom-secondary;
  position: absolute;
  top: -15px;
  left: -15px;
  transition: all 0.2s;
  border: none;
  &:not(.read-only):hover {
    background: $custom-secondary;
    color: #fff;
  }
  &.read-only {
    cursor: default;
  }
}
</style>
