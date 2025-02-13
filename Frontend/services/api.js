import axios from "axios";
import Cookies from "js-cookie";
// import API_ENDPOINTS from "./apiEndPoints";
import API_CONFIG from "./apiConfig";
import API_ENDPOINTS from "./apiEndPoints";
import Logout from "../app/asyncthunk/logoutAuth";
import { useDispatch } from "react-redux";

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = Cookies.get("access_token");
    if (Token) {
      config.headers["Authorization"] = `Bearer ${Token}`;
    }
    // console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  async (error) => {
    const dispatch = useDispatch();
    console.log("response", error);
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
          { refresh_token: Token },
        );
        // const access_token = Cookies.get('access_token')
        return axios(originalRequest);
      } else {
        dispatch(Logout());
        window.location.href = "/login";
      }
    } catch (refresh_error) {
      console.error("token_refresh_failed", refresh_error);
      dispatch(Logout());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
