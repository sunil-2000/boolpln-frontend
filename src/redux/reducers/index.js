import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import groupApiReducer from "./groupApiReducer";
import userApiReducer from "./userApiReducer";
export default combineReducers({
  calendarReducer,
  groupApiReducer,
  userApiReducer,
});
