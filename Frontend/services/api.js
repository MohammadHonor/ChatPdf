import axios from "axios";
import Cookies from "js-cookie";
// import API_ENDPOINTS from "./apiEndPoints";
import API_CONFIG from "./apiConfig";
import API_ENDPOINTS from "./apiEndPoints";

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = Cookies.get("access_token");
    if (Token) {
      config.headers["Authorization"] = `Bearer ${Token}`;
    }
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    try {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
      }
      const Token = Cookies.get("refresh_token");
      if (Token) {
        await axios.put(
          `${API_CONFIG.BASE_URL}/${API_ENDPOINTS.REFRESH_TOKEN_PUT}`,
          { refresh_toke: Token },
        );
        // const access_token = Cookies.get('access_token')
        return axios(originalRequest);
      }
    } catch (refresh_error) {
      console.error("token_refresh_failed", refresh_error);
    }
  },
);

export default axiosInstance;
