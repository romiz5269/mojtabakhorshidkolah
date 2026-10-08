import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  timeout: 30000,

  withCredentials: true,

  headers: {
    Accept: "application/json",

    "Content-Type": "application/json",
  },
});
