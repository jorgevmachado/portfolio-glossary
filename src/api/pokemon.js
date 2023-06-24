import { URLS, PAGINATION_SIZE } from '@/utils/constants'
import apiClient from '@/api/client';
const baseUrl = URLS.VUE_APP_POKEMON_API;
const paginationSize = PAGINATION_SIZE;
export default {
    async getPokemons(page = 1) {
        return await apiClient.get(`${baseUrl}`, {
            params: {
                limit: paginationSize,
                offset: (page - 1) * paginationSize,
            },
        })
    }
}
