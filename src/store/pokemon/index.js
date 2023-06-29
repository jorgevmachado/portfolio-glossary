import pokemon from '@/api/pokemon';
import localStorage from '@/lib/storage/local-storage';
export default {
    namespaced: true,
        state: {
        pokemons: [],
        pokedex: [],
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
        addToPokedex(state, name) {
            state.pokedex.push(name);
            localStorage.setPokeDex(state.pokedex)
        },
        removeFromPokedex(state, name) {
            state.pokedex = state.pokedex.filter((item) => item.name !== name)
            localStorage.setPokeDex(state.pokedex)
        },
    },
    actions: {
        async fetchPokemons({commit, dispatch}, page = 1) {
            commit('setLoading', true, {root: true});
            const response = await pokemon.getPokemons(page);
            const { results = [] } = response;
            await dispatch('fetchPokemonsDetails', results);
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
        removeFromPokedex({ commit, state}, name){
            commit('removeFromPokedex', state.pokedex.find((item) => item.name === name));
        },
    },

};
