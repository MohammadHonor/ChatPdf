import axios from "axios";
import API_ENDPOINTS from "./apiEndPoints";
import API_CONFIG from "./apiConfig";

const api = axios.create({
    baseURL:API_CONFIG.BASE_URL,
    headers:API_CONFIG.HEADERS,
});

export default api;