import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import groupApiReducer from "./groupApiReducer";
export default combineReducers({
  calendarReducer,
  groupApiReducer,
});
