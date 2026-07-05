import axios from "axios";

const api = axios.create({
  baseURL: "https://invalid-api-url.com"
});

export default api;