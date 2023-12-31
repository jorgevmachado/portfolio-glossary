import {LOCAL_STORAGE} from '@/lib/storage/constants';

export default {
    storage: typeof window === 'undefined' ? false : window.localStorage,
    get(key, fallback = '{}', parse = true) {
      if (!this.storage) return '';
      const data = localStorage.getItem(key) || fallback;
      if (parse) return JSON.parse(data);
      return data;
    },
    set(key, rawData, stringify = true) {
      if (!this.storage) return;
      const data = stringify ? JSON.stringify(rawData) : rawData;
        localStorage.setItem(key, data);
    },
    setPokemons(pokemons = []) {
        return this.set(LOCAL_STORAGE.POKEMONS, pokemons);
    },
    setPokeDex(pokemons = []) {
        return this.set(LOCAL_STORAGE.POKEDEX, pokemons);
    },
    getPokemons() {
      return this.get(LOCAL_STORAGE.POKEMONS) || [];
    },
    getPokeDex() {
        return this.get(LOCAL_STORAGE.POKEDEX) || [];
    },
    setStarWarsFilms(films = []) {
        return this.set(LOCAL_STORAGE.STAR_WARS.FILMS, films);
    },
    getStarWarsFilms() {
        return this.get(LOCAL_STORAGE.STAR_WARS.FILMS) || [];
    },
    setStarWarsCharacters(characters = []) {
        return this.set(LOCAL_STORAGE.STAR_WARS.CHARACTERS, characters);
    },
    getStarWarsCharacters() {
        return this.get(LOCAL_STORAGE.STAR_WARS.CHARACTERS) || [];
    },
}
