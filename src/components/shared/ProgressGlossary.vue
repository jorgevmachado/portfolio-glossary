<template>
  <div class="w-full bg-neutral-200 dark:bg-neutral-600">
    <div
        class="p-1 text-center text-xs font-medium loading-none"
        :class="classLayout"
        :style=styleLayout>
      {{value}}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressGlossary',
  props: {
    value: {
      value: {
        type: Number,
        required: true,
      },
    }
  },
  computed: {
    classLayout() {
      const backgroundColor = 'blue';
      const textColor = 'white';
      return `bg-${backgroundColor}-500 text-${textColor}`;
    },
    styleLayout() {
      return {width: `${this.value}%`}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
