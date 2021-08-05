import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import App from "./App";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  getRefreshToken,
  getAccessToken,
  getLoggedIn,
} from "./redux/reducers/userApiReducer";
import refresh from "./redux/middleware/user/refresh";

axios.defaults.baseURL = "https://scheduler-gang.herokuapp.com";

store.subscribe(() => {
  const userDataToSave = store.getState();
  localStorage.setItem("refreshToken", getRefreshToken(userDataToSave));
  localStorage.setItem("accessToken", getAccessToken(userDataToSave));
  localStorage.setItem("loggedIn", getLoggedIn(userDataToSave));
});

const refreshAuthLogic = async (failedRequest) => {
  console.log(await store.dispatch(refresh(getRefreshToken(store.getState()))));
  return Promise.resolve();
};

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes("current_user")) {
      request.headers["Authorization"] =
        "Bearer " + getAccessToken(store.getState());
      request.headers["Content-type"] = "application/json";
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createAuthRefreshInterceptor(axios, refreshAuthLogic);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
