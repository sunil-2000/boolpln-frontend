import { createStore } from "redux";
import rootReducer from "./reducers/index.js";
import thunk from "redux-thunk";

// setup file for redux

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(...middlewares)
);

export default store;
