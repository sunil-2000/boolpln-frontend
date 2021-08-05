import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index.js";
import thunk from "redux-thunk";
import { userLoad } from "./userStorage";

// setup file for redux

const middlewares = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const userData = userLoad();
const store = createStore(rootReducer, userData, enhancer);

export default store;
