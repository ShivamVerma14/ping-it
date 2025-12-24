import axios from "axios";

export const axiosInstance = axios.create({
  // In production, backend and frontend are served from the same origin
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "/api",
  withCredentials: true, // Include cookies in requests
});
