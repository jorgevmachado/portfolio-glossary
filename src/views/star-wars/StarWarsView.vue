<template>
  <section v-if="!loading">
    <h1>STAR WARS</h1>
  </section>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'StarWarsView',
  computed: {
    ...mapState(['loading'])
  },
}
</script>

<style lang="scss">

</style>
