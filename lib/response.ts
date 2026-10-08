import {axiosInstance} from "./axios";

axiosInstance.interceptors.response.use(
  (res) => res,

  async (error) => {
    // refresh token
  },
);
