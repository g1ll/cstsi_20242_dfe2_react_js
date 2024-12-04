import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    const token = localStorage.getItem("ACCESS_TOKEN");
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {return response},
    (error) => {
        console.error(error)
        const { response } = error;
        response?.status === 401 
            && localStorage.removeItem("ACCES_TOKEN");
        throw error;
    }
);

export default axiosClient;


