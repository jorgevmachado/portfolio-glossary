import starWars from '@/api/starWars';
import localStorage from '@/lib/storage/local-storage';
export default {
    namespaced: true,
    state: {
        characters: [],
        films: [],
        total: 0,
        currentPage: 0,
    },
    getters: {
        characters: (state) => {
            const characters = localStorage.getStarWarsCharacters();
            if(characters.length) {
                state.characters = characters;
            }
            return state.characters;
        },
        films : (state) => {
            const films = localStorage.getStarWarsFilms();
            if(films.length) {
                state.films = films;
            }
            return state.films;
        }
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters;
            localStorage.setStarWarsCharacters(state.characters);
        },
        setFilms(state, films) {
            state.films = films;
            localStorage.setStarWarsFilms(state.films);
        },
        setTotal(state, total) {
            state.total = total;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
    },
    actions: {
        async fetchCharacters({commit, dispatch}, page = 1) {
            commit('setLoading', true, {root: true});
            const characters = localStorage.getStarWarsCharacters();
            if(!characters) {
                const response = await starWars.getCharacter();
                const { results = [], count = 0 } = response;
                commit('setCurrentPage', page || 1);
                commit('setTotal', count);
                await dispatch('fetchFilms');
                dispatch('fetchCharactersWithDetails', results);
                commit('setLoading', false, {root: true});
                return;
            }
            commit('setCharacters', characters);
            commit('setLoading', false, {root: true});
        },
        async fetchFilms({commit}){
            commit('setLoading', true, {root: true});
            const films = localStorage.getStarWarsFilms();
            if(!films) {
                const response = await starWars.getFilms();
                const { results = [] } = response;
                commit('setFilms', results);
                commit('setLoading', false, {root: true});
                return;
            }
            commit('setFilms', films);
            commit('setLoading', false, {root: true});
        },
        fetchCharactersWithDetails({commit, state}, characters) {
            commit('setCharacters', characters.map((item) => {
                item.films = item.films.map((film) => state.films.find((f) => f.url === film));
                return item;
            }));

        }
    },

};
