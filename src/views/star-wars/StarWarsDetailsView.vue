<template>
  <section class="star-wars-details" v-if="character">
    <div class="pokemon-details__close mb-10">
      <a
          class="star-wars-details__close-button shadow flex-center"
          @click="$router.go(-1)"
      >
        <font-awesome-icon icon="close" class="star-wars-details__close-icon ml-5 mt-4 text-lg" />
      </a>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 star-wars-details__container">
      <h1 class="justify-center text-center mt-10 mb-5 text-4xl star-wars-details__container-text">{{character.name}}</h1>
      <hr class="mt-5 mb-5">
      <star-wars-specie :species="character.species" v-if="character.species.length"/>
      <star-wars-info v-bind="characterInfo"/>
      <star-wars-films :films="character.films" v-if="character.films.length"/>
      <star-wars-homeworld :homeworld="character.homeworld"/>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import StarWarsSpecie from '@/components/star-wars/details/StarWarsSpecie.vue';
import StarWarsInfo from '@/components/star-wars/details/StarWarsInfo.vue';
import StarWarsFilms from '@/components/star-wars/details/StarWarsFilms.vue';
import StarWarsHomeworld from '@/components/star-wars/details/StarWarsHomeworld.vue';

export default {
  name: 'StarWarsDetailsView',
  components: {StarWarsSpecie, StarWarsInfo, StarWarsFilms, StarWarsHomeworld},
  data() {
    return {
      character: {},
    };
  },
  created() {
    this.character = this.characters.find((item) => item.name === this.name);
    console.log('this.character => ', this.character);
  },
  computed: {
    ...mapGetters('starWars', ['characters']),
    name() {
      return this.$route.params.name;
    },
    characterInfo() {
      const {
        birth_year = '',
        eye_color = '',
        gender = '',
        hair_color = '',
        height = '',
        mass = '',
        skin_color = '',
    } = this.character;
      return {
        birthYear: birth_year,
        eyeColor: eye_color,
        gender: gender,
        hairColor: hair_color,
        height: +height,
        mass: +mass,
        skinColor: skin_color,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.star-wars-details {
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  &__close {
    &-button{
      background: #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: #000;
      position: fixed;
      top: 20%;
      right: 5%;
      transition: all 0.2s;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background: #000000;
        color: #fff;
      }
    }
    &-icon {
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    padding: 3rem;
    border-radius: 30px;
    background: #000;
    border: none;
    margin: 1rem 2rem 1rem 1rem;
    cursor: pointer;
    transition: all 0.4s;
    &-text {
      color: #ffff00;
    }
  }
}

</style>
