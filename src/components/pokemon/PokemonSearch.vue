<template>
  <div class="flex pokemon-search">
    <div class="px-3 w-100 mr-5 rounded shadow">
      <font-awesome-icon icon="search" class="icon"/>
      <input type="text" class="input" v-model="filter" placeholder="Enter the number or name of the Pokémon" @keypress.enter="search">
    </div>
    <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
      Search
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'PokemonSearch',
  data() {
    return {
      filter: '',
    };
  },
  methods: {
    ...mapActions({
      fetchPokemonByName: 'pokemon/fetchPokemonByName',
      fetchPokemons: 'pokemon/fetchPokemons',
    }),
    search() {
      if(this.filter) this.fetchPokemonByName(this.filter.toLowerCase());
      else this.fetchPokemons();
    }
  }
}
</script>

<style lang="scss">
.pokemon-search {
  flex-direction: column;
  width: 100%;
  & > div {
    margin-bottom: 20px;
  }
  .icon {
    color: #000;
    font-size: 20px;
  }
  .input {
    border: none;
    padding: 28px;
    &::placeholder {
      color: #c4c4c4;
    }
    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }
  }
}
</style>
