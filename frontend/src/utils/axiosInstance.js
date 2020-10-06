import LocalStorageService from "./localStorageService";

const localstorageService = LocalStorageService.getService();
const axios = require("axios");
let axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localstorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    } else {
    }
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//Add a response interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "/users/auth/refresh/"
    ) {
      localstorageService.clearToken();
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localstorageService.getRefreshToken();
      return axiosInstance
        .post("/users/auth/refresh/", {
          refresh: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            localstorageService.setAccessToken(res.data);
            axiosInstance.defaults.headers.common["Authorization"] =
              "Bearer " + localstorageService.getAccessToken();
            return axiosInstance(originalRequest);
          }
        });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
