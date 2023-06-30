<template>
  <button :class="classList" class="btn" :title="tooltip" :style="{color: color}">
    <font-awesome-icon :icon="icon" class="icon" />
  </button>
</template>

<script>
export default {
  name: 'CardActionsButtonGlossary',
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
    color: {
      type: String,
      default: '#fff',
    }
  },
  computed: {
    classList() {
      const hasGreen = this.color === '#68a198';
      const hasWhite = !hasGreen;
      return {
        shadow: true,
        'read-only': this.readOnly,
        'flex-center': true,
        'action-button': true,
        'action-button__green': hasGreen,
        'action-button__white': hasWhite,
      };
    },
  }
}
</script>

<style scoped lang="scss">
.action-button {
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -15px;
  left: -15px;
  transition: all 0.2s;
  border: none;
  &.read-only {
    cursor: default;
  }
}
.action-button__white {
  &:not(.read-only):hover {
    color: #fff;
  }
}
.action-button__green {
  &:not(.read-only):hover {
    background: #68a198;
    color: #fff;
    .icon {
      color: #fff;
    }
  }
}
</style>
