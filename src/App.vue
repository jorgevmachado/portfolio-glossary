<template>
  <div id="app">
    <loading-glossary/>
    <router-view/>
  </div>
</template>
<script>
import LoadingGlossary from '@/components/shared/LoadingGlossary.vue';

export default {
  name: 'App',
  components: {LoadingGlossary},
}
</script>

<style lang="scss" src="@/assets/styles/layout.scss"></style>
