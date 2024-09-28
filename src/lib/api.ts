import axios from "axios";

const api = axios.create({
  baseURL: "https://pwabrd.labsystec.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
