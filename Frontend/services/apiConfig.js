const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_URI,
  HEADERS: {
    "Content-Type": "multipart/form-data",
  },
  JSON_HEADERS: {
    "Content-type": "application/json",
  },
};

export default API_CONFIG;
