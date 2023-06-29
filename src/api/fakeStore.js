import { URLS } from '@/utils/constants'
import apiClient from '@/api/client';
const baseUrl = URLS.VUE_APP_FAKE_STORE_API;
export default {
    async getProducts() {
        return apiClient.response(await apiClient.get(`${baseUrl}`));
    }
}
