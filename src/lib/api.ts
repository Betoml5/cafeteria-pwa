import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tecnm.com.ar/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
  },
});

export default api;
