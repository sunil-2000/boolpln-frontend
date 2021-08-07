import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import groupApiReducer from "./groupApiReducer";
import userApiReducer from "./userApiReducer";
import { LOGOUT } from "../types";

const appReducer = combineReducers({
  calendarReducer,
  groupApiReducer,
  userApiReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
