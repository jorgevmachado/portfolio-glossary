<template>
    <section class="main">
        <header-glossary/>
        <router-view></router-view>
        <footer-glossary/>
    </section>
</template>

<script>
import HeaderGlossary from '@/components/shared/HeaderGlossary.vue';
import FooterGlossary from '@/components/shared/FooterGlossary.vue';
export default {
  name: 'LayoutGlossary',
  components: {HeaderGlossary, FooterGlossary}
}
</script>

<style lang="scss">
.main {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
}
</style>
