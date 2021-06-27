import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import Refresh from "./flow/security/refresh";

const refreshAuthLogic = (failedRequest) => {
  const refresh = new Refresh();
  refresh.refresh();
  return Promise.resolve();
};

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes("current_user")) {
      console.log("inside interceptor");
      request.headers["Authorization"] =
        "Bearer " + localStorage.getItem("access");
      request.headers["Content-type"] = "application/json";
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createAuthRefreshInterceptor(axios, refreshAuthLogic);

ReactDOM.render(<App />, document.getElementById("root"));
