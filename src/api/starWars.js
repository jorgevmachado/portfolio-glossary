import { URLS } from '@/utils/constants'
import apiClient from '@/api/client';
const baseUrl = URLS.VUE_APP_STAR_WARS_API;
const getCharacter = async (page = 1) => {
    const response = apiClient.response(await apiClient.get(`${baseUrl}/people?page=${page}`));
    const { results = [], count = 0} = response;
    const result = await Promise.all(results.map(async (item) => {
        item.homeworld = apiClient.response(await getPlanetByCharacter(item.homeworld));
        if(item.species.length) {
            item.species = await Promise.all(item.species.map(async (specie) => {
                specie = apiClient.response(await getSpeciesByCharacter(specie));
                return specie;
            }))
        }
        if(item.vehicles.length) {
            item.vehicles = await Promise.all(item.vehicles.map(async (vehicle) => {
                vehicle = apiClient.response(await getVehiclesByCharacter(vehicle));
                return vehicle;
            }))
        }
        if (item.starships.length) {
            item.starships = await Promise.all(item.starships.map(async (starship) => {
                starship = apiClient.response(await getStarshipsByCharacter(starship));
                return starship;
            }))
        }
        return item;
    }));
    return {
        results: result,
        count,
    }
};

const getFilms = async () => apiClient.response(await apiClient.get(`${baseUrl}/films`));
const getPlanetByCharacter = async (url) => apiClient.get(url);
const getSpeciesByCharacter = async (url) => apiClient.get(url);
const getVehiclesByCharacter = async (url) => apiClient.get(url);
const getStarshipsByCharacter = async (url) => apiClient.get(url);

export default {
    getCharacter,
    getFilms,
    getPlanetByCharacter,

}
