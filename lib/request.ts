import {AxiosRequestConfig} from "axios";

import {axiosInstance} from "./axios";

export async function request<T>(config: AxiosRequestConfig) {
  const response = await axiosInstance.request<T>(config);

  return response.data;
}
