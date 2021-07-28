import {
  NEW_DAYS,
  GET_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_SUCCESS,
  CALENDAR_ERROR,
  CALENDAR_PENDING,
} from "../types";

// initial state of any calendar
const initialState = {
  days: [],
  groupID: null,
  groupDays: [],
};

// function for comparing which day came first
function dayComparator(i, j) {
  return i > j ? 1 : -1;
}

// reducer for setting selected days
export default function calendarReducer(state = initialState, action) {
  // go over each action type
  switch (action.type) {
    case NEW_DAYS:
      let { date, timeSlots } = action.payload; // get date and selected timeslots

      // generate date in UTC
      const utcDate =
        date.getUTCDate() +
        "/" +
        date.getUTCMonth() +
        "/" +
        date.getUTCFullYear();
      let itemsCopy = [...state.days]; // deep copy of days
      let updated = itemsCopy.filter((i) => i.utcDate !== utcDate); // keep other days
      updated.push({ date: date, utcDate: utcDate, timeSlots: timeSlots }); // add new day with new info
      updated.sort((i, j) => dayComparator(i.date, j.date)); // sort for readability

      // return tthe updated days
      return {
        ...state,
        days: updated,
      };
    case GET_CALENDAR_SUCCESS:
      return {
        ...state,
        groupDays: action.payload.calendar,
        groupID: action.payload.groupID,
        pending: false,
      };
    case UPDATE_CALENDAR_SUCCESS:
      return {
        ...state,
        groupDays: action.payload.week,
        pending: false,
      };
    case CALENDAR_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    }
    case CALENDAR_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    default:
      // on default do nothing
      return state;
  }
}

// getters
export const getDayList = (state) => state.calendarReducer.days;
export const getCalendarGroup = (state) => state.calendarReducer.groupID;
