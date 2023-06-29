import {createStore} from 'vuex'
import pokemon from './pokemon';
import fakeStore from './fake-store';
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
  }
})
