import pokemon from '@/api/pokemon';
import localStorage from '@/lib/storage/local-storage';
import validation from '@/utils/validations';
export default {
    namespaced: true,
        state: {
        pokemons: [],
        pokedex: [],
        total: 0,
        currentPage: 0,
    },
    getters: {
        haveOnPokedex: (state) => (name) => {
            const pokeDex = localStorage.getPokeDex();
            if(pokeDex.length) {
                state.pokedex = pokeDex;
            }
            return state.pokedex.some((item) => item.name === name);
        },
        getPokemonByName: (state) => (name) => {
            const pokemons = localStorage.getPokemons();
            if (pokemons.length) {
                state.pokemons = pokemons;
            }
            return state.pokemons.find((item) => item.name === name);
        },
        countOfPokedex: (state) => {
            const pokeDex = localStorage.getPokeDex();
            if(pokeDex.length) {
                state.pokedex = pokeDex;
            }
            return state.pokedex.length
        },
    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;
            localStorage.setPokemons(state.pokemons);
        },
        setTotalPokemons(state, total) {
          state.total = total;
        },
        setCurrentPage(state, page) {
          state.currentPage = page;
        },
        addToPokedex(state, pokemon) {
            state.pokedex.push(pokemon);
            localStorage.setPokeDex(state.pokedex)
        },
        removeFromPokedex(state, name) {
            state.pokedex = state.pokedex.filter((item) => item.name !== name)
            localStorage.setPokeDex(state.pokedex)
        },
        clearPokemons(state) {
            state.pokemons = [];
            localStorage.setPokemons(state.pokemons);
        }
    },
    actions: {
        async fetchPokemons({commit, dispatch}, page = 1) {
            commit('setLoading', true, {root: true});
            commit('clearPokemons');
            const response = await pokemon.getPokemons(page);
            const { results = [], count = 0 } = response;
            commit('setCurrentPage', page || 1);
            commit('setTotalPokemons', count);
            await dispatch('fetchPokemonsDetails', results);
            commit('setLoading', false, {root: true});
        },
        async fetchPokemonByName({commit, dispatch}, name ) {
            commit('setLoading', true, {root: true});
            commit('clearPokemons');
            const pokemons = [];
            try {
                const result = await pokemon.getPokemonByName(name);
                if (!validation.isEmptyObject(result)) {
                    pokemons.push(result);
                }
            } catch (error) {
                console.error('error => ', error)
            }
            await dispatch('fetchPokemonsDetails', pokemons);
            commit('setLoading', false, {root: true});
        },
        async fetchPokemonsDetails({commit}, pokemons) {
            const pokemonsWithDetails = await Promise.all(pokemons.map((p) => pokemon.getPokemonByName(p.name)));
            commit('setPokemons', pokemonsWithDetails.map((pokemon) => {
                const {
                    name = '',
                    sprites = {},
                    types = [],
                    stats = [],
                    weight = 0,
                    height = 0
                } = pokemon;
                const { other = {}, front_default = ''} = sprites;
                const {dream_world = {}} = other;
                const { front_default: dream_world_front_default = ''} = dream_world;
                return {
                    name,
                    image: dream_world_front_default || front_default,
                    types,
                    stats,
                    weight,
                    height,
                };
            }));
        },
        async getEvolutionsByName({commit}, name) {
            commit('setLoading', true, {root: true});
            const response = await pokemon.getEvolutionsByName(name);
            commit('setLoading', false, {root: true});
            return response;
        },
        async getSpecieByName({commit}, name) {
            commit('setLoading', true, {root: true});
            const response = await pokemon.getSpecieByName(name);
            commit('setLoading', false, {root: true});
            return response;
        },
        async getEvolutionChainByUrl({commit}, url) {
            commit('setLoading', true, {root: true});
            const response = await pokemon.getEvolutionChainByUrl(url);
            commit('setLoading', false, {root: true});
            return response;
        },
        async getPokemonByName({commit}, name) {
            commit('setLoading', true, {root: true});
            const response = await pokemon.getPokemonByName(name);
            commit('setLoading', false, {root: true});
            return response;
        },
        addToPokedex({ commit, state}, name) {
            commit('addToPokedex', state.pokemons.find((item) => item.name === name));
        },
        removeFromPokedex({ commit}, name){
            commit('removeFromPokedex', name);
        },
    },

};
