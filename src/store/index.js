import {createStore} from 'vuex'
import pokemon from '@/api/pokemon';
import fakeStore from '@/api/fakeStore';

export default createStore({
  state: {
    loading: false,
  },
  getters: {
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {},
  modules: {
    fakeStore: {
      namespaced: true,
      state: {
        products: [],
        productsInBag: [],
      },
      getters: {
      },
      mutations: {
        setProducts(state, products) {
          state.products = products;
        },
        addToBag(state, product) {
          state.productsInBag.push(product);
          localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
        },
        removeFromBag(state, product) {
          const { id = null} = product;
          if(id) {
            state.productsInBag = state.productsInBag.filter((item) => item.id !== id);
            localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
          }
        },
        loadBags(state, products) {
          state.productsInBag = products;
        }
      },
      actions: {
        async loadProducts({commit}) {
          const response = await fakeStore.getProducts();
          const { data = []} = response;
          commit('setProducts', data);
        },
        loadBags({ commit }) {
          if(localStorage.getItem('productsInBag')) {
            commit('loadBags',JSON.parse(localStorage.getItem('productsInBag')));
          }
        },
        addToBag({commit}, product) {
          product.quantity = 1;
          commit('addToBag', product);
        },
        removeFromBag({commit}, product) {
          if(confirm('Are you sure you want to remove this item?')) {
            commit('removeFromBag', product);
          }
        },
      },

    },
    pokemon: {
      namespaced: true,
      state: {
        pokemons: [],
      },
      getters: {
      },
      mutations: {
        setPokemons(state, pokemons) {
          state.pokemons = pokemons;
        }
      },
      actions: {
        async fetchPokemons({commit}) {
          const response = await pokemon.getPokemons();
          commit('setPokemons', response);
        }
      },

    },
  }
})
