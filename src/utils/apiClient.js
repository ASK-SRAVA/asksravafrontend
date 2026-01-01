import axios from "axios";
import getSravaOptions from "./sravaUtils";


const options = getSravaOptions();
console.log("1",options)
const API_URL = `${options.baseUrl}`;

console.log(API_URL);

export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptors
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
