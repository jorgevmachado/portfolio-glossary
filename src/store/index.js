import {createStore} from 'vuex'
import pokemon from './pokemon';
import fakeStore from './fake-store';
import starWars from './star-wars';
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
    fakeStore,
    pokemon,
    starWars,
  }
})
