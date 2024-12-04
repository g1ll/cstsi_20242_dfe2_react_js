import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // headers: {Accept: "application/json"},
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    return config;
});

export default axiosClient;