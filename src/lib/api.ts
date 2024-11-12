import axios from "axios";

const api = axios.create({
  baseURL: "https://pwabrd.labsystec.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") || "");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {console.log(error)}
  return config;
});

export default api;
