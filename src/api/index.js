import axios from "axios";
import store from "../store/index";
import router from "../router/index";

export const DEBUG_MODE = false;
export const HOST = "http://localhost:8888";
// export const HOST = 'http://welcomm.softbase.kr';
export const FILE_SOCKET_URL = "http://localhost:75";
export const PROJECT_NAME = "DENEB";
export const FILE_HOST = "D:/05_WorkFiles/deneb";

// export const HOST = "http://106.14.20.110/";
const request = (method, url, params, responseType) => {
  return axios({
    method,
    url: HOST + url,
    params: method === "get" ? params : null,
    data: method !== "get" ? params : null,
    responseType: responseType ? responseType : "json",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      if (DEBUG_MODE) {
        console.info(
          method + " : " + HOST + url + " --------------------------"
        );
        console.info(params);
        console.info(response);
      }
      return response;
    })
    .catch((error) => {
      if (DEBUG_MODE) {
        console.info(params);
        console.error(HOST + url);
        console.error(error);
      }
      return error.response;
    });
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      store.commit("LOGOUT");
      return router.push("/Login");
    } else {
      return Promise.reject(error);
    }
  }
);

export const auth = {
  login(data) {
    return request("post", "/api/auth/login", data);
  },
  logout() {
    return request("get", "/api/auth/logout ");
  },
};

export const user = {
  list(data) {
    return request("get", "/api/user/list", data);
  },
  save(data) {
    return request("post", "/api/user/save", data);
  },
  password_update(data) {
    return request("post", "/api/user/password_update", data);
  },
  detail(seq) {
    return request("get", `/api/user/detail/${seq}`);
  },
};

export const order = {
  list_statics(data) {
    return request("get", "/api/order/list_statics", data);
  },
  list(data) {
    return request("get", "/api/order/list", data);
  },
  excel_download(data) {
    return request("get", "/api/order/excel_download", data);
  },
  save(data) {
    return request("post", "/api/order/save", data);
  },
  complete(seq) {
    return request("put", `/api/order/complete/${seq}`);
  },
  cancel(seq) {
    return request("put", `/api/order/cancel/${seq}`);
  },
};

export const product = {
  list(data) {
    return request("get", "/api/product/list", data);
  },
  detail(seq) {
    return request("get", `/api/product/detail/${seq}`);
  },
  save(data) {
    return request("post", "/api/product/save", data);
  },
  delete(seq) {
    return request("put", `/api/product/delete/${seq}`);
  },
  payment_check(seq) {
    return request("get", `/api/product/payment_check/${seq}`);
  },
  excel_download(data) {
    return request("post", "/api/product/excel_download", data);
  },
};

export const category = {
  list(data) {
    return request("get", "/api/product/category/list", data);
  },
};

export const setting = {
  save(data) {
    return request("post", "/api/setting/save", data);
  },
  detail() {
    return request("get", "/api/setting/detail");
  },
  start_image_delete(seq) {
    return request("delete", `/api/setting/start_image/delete/${seq}`);
  },
};

export const device = {
  list(data) {
    return request("get", "/api/device/list", data);
  },
  save(data) {
    return request("post", "/api/device/save", data);
  },
  login(data) {
    return request("post", `/api/device/login`, data);
  },
  reboot(seq) {
    return request("put", `/api/device/reboot/${seq}`);
  },
  signal(data) {
    return request(
      "post",
      `/api
    /device/signal`,
      data
    );
  },
  app_update_complete(data) {
    return request("post", `/api/device/app_update_complete`, data);
  },
};

export const seat = {
  list(data) {
    return request("get", "/api/seat/list", data);
  },
  detail(seq) {
    return request("get", `/api/seat/detail/${seq}`);
  },
  save(data) {
    return request("post", "/api/seat/save", data);
  },
  update_state(data) {
    return request("post", "/api/seat/update_state", data);
  },
  delete(seq) {
    return request("delete", `/api/seat/delete/${seq}`);
  },
};

export const payment = {
  list(data) {
    return request("get", "/api/payment/list", data);
  },
  detail(seq) {
    return request("get", `/api/payment/detail/${seq}`);
  },
  cancel(data) {
    return request("post", "/api/payment/cancel", data);
  },
  excel_download(data) {
    return request("post", "/api/payment/excel_download", data);
  },
};
