import { combineReducers } from "redux";
import dayReducer from "./dayReducer";
import groupApiReducer from "./groupApiReducer";
import userReducer from "./userReducer";
export default combineReducers({
  dayReducer,
  groupApiReducer,
  userReducer,
});
