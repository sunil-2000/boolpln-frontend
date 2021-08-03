import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import App from "./App";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import Refresh from "./flow/security/refresh";
import { Provider } from "react-redux";
import store from "./redux/store";

axios.defaults.baseURL = "https://scheduler-gang.herokuapp.com";

const refreshAuthLogic = async (failedRequest) => {
  await Refresh.refresh();
  return Promise.resolve();
};

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes("current_user")) {
      console.log("inside interceptor");
      request.headers["Authorization"] = "Bearer " + Refresh.accessToken;
      request.headers["Content-type"] = "application/json";
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createAuthRefreshInterceptor(axios, refreshAuthLogic);
Refresh.startUp();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
