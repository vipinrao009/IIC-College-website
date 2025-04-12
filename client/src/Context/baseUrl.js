import axios from "axios";

const environment = process.env.NODE_ENV;

const baseUrl = environment === "development"
  ? "http://localhost:8080/api/v1"
  : "https://your-production-url.com/api/v1";  // Apna production URL daal yahan

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true  // ✅ so har request me cookie jayegi
});

export default axiosInstance;
