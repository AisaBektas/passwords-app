import { AxiosInstance } from "axios";

const interceptRequest = (httpClient: AxiosInstance): void => {
  httpClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default interceptRequest;
