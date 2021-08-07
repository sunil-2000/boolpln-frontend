import {
  NEW_TIME,
  GET_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_SUCCESS,
  CALENDAR_ERROR,
  CALENDAR_PENDING,
  CLEAR_ERROR,
  CLEAR_CALENDAR,
} from "../types";

const days = [];
for (let i = 0; i < 7; i++) {
  days.push(Array(24).fill(false));
}

// initial state of any calendar
const initialState = {
  days: days,
  groupID: null,
  groupDays: [],
  error: null,
  submit: false,
};

// reducer for setting selected days
export default function calendarReducer(state = initialState, action) {
  // go over each action type
  switch (action.type) {
    case NEW_TIME:
      let weekCopy = [...state.days];
      let dayCopy = [...weekCopy[action.payload.dayIndex]];
      dayCopy[action.payload.timeIndex] = action.payload.value;
      weekCopy[action.payload.dayIndex] = dayCopy;
      return {
        ...state,
        days: weekCopy,
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
    case CLEAR_CALENDAR: {
      const days = [];
      for (let i = 0; i < 7; i++) {
        days.push(Array(24).fill(false));
      }
      return {
        ...state,
        days: days,
        submit: true,
      };
    }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      // on default do nothing
      return state;
  }
}

// getters
export const getDayList = (state) => state.calendarReducer.days;
export const getCalendarGroup = (state) => state.calendarReducer.groupID;
export const getCalError = (state) => state.calendarReducer.error;
export const getGroupDayList = (state) => state.calendarReducer.groupDays;
export const getSubmit = (state) => state.calendarReducer.submit;
