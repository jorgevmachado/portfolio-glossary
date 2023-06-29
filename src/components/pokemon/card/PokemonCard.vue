<template>
  <div class="card relative m-5">
    <div class="body">
      <pokemon-card-actions :name="title" :allow-remove-from-pokedex="allowRemoveFromPokedex"/>
      <span class="font-bold text-lg">{{title}}</span>
      <div class="relative h-100">
        <div class="pointer">
          <img class="image" :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCardActions from '@/components/pokemon/card/PokemonCardActions.vue';

export default {
  name: 'PokemonCard',
  components: {PokemonCardActions},
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    allowRemoveFromPokedex: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
$custom-primary: #df1818;
$custom-secondary: #68a198;
.card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  padding: 25px;
  border-radius: 30px;
  background: $custom-secondary;
  border: none;
  color: #fff;
  width: 320px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover,
  &:active {
    opacity: 0.8;
  }
  .body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    .image {
      position: absolute;
      right: -80px;
      bottom: -46px;
      width: 150px;
      height: 150px;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  }
}
</style>
