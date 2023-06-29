import { URLS, PAGINATION_SIZE } from '@/utils/constants'
import apiClient from '@/api/client';
const baseUrl = URLS.VUE_APP_POKEMON_API;
const paginationSize = PAGINATION_SIZE;

const getPokemons = async (page = 1) =>
    apiClient.response(await apiClient.get(`${baseUrl}/pokemon`, {
        params: {
            limit: paginationSize,
            offset: (page - 1) * paginationSize,
        },
    }));
const getPokemonByName = async (name) => apiClient.response(await apiClient.get(`${baseUrl}/pokemon/${name}`));
const getSpecieByName = async (name = '') =>  apiClient.response(await apiClient.get(`${baseUrl}/pokemon-species/${name}`));


const getEvolutionChainByUrl = async (url) => apiClient.response(await apiClient.get(url));

const getEvolutionChain = async (specie = {}) => {
    const { evolution_chain: {url = ''}} = specie;
    const evolutions = await getEvolutionChainByUrl(url);
    const {chain = {}} = evolutions;
    return chain;
}

const getNextEvolutions = (evolutionList = []) => (
    evolutionList
        .map((item) => [item.species.name].concat(...getNextEvolutions(item.evolves_to)))
        .reduce((arr, curr) => [...arr, ...curr], [])
)

const getEvolutionsSpecies = (evolutionsChain = {}) => {
    const {species: {name = ''}, evolves_to = []} = evolutionsChain;
    return [
        name,
        ...getNextEvolutions(evolves_to),
    ];
};

const getPokemonEvolutions = async (evolutionSpecies = []) => await Promise.all(evolutionSpecies.map((item) => getPokemonByName(item)));
const getEvolutionsByName = async (name = '') => {
    const specie = await getSpecieByName(name);
    const evolutionsChain = await getEvolutionChain(specie);
    const evolutionsSpecies = getEvolutionsSpecies(evolutionsChain);
    const pokemonEvolutions = await getPokemonEvolutions(evolutionsSpecies);
    return pokemonEvolutions.map((item) => {
        const {name = '', sprites: {other: { 'official-artwork': {front_default = ''}}}} = item;
        return {
            name,
            image: front_default
        };
    });

};
export default {
    getPokemons,
    getPokemonByName,
    getSpecieByName,
    getEvolutionChainByUrl,
    getEvolutionsByName,
}
