import { combineReducers } from "redux";
import dayReducer from "./dayReducer";
import groupApiReducer from "./groupApiReducer";
export default combineReducers({
  dayReducer,
  groupApiReducer,
});
