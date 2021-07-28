import {
  GET_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_SUCCESS,
  CALENDAR_ERROR,
  CALENDAR_PENDING,
} from "../types";

export const updateCalendarSuccess = (week) => ({
  type: UPDATE_CALENDAR_SUCCESS,
  payload: { week: week },
});

export const getCalendarSuccess = (groupID, calendar) => ({
  type: GET_CALENDAR_SUCCESS,
  payload: { groupID: groupID, calendar: calendar },
});

export const calendarPending = () => ({
  type: CALENDAR_PENDING,
});

export const calendarError = (error) => ({
  type: CALENDAR_ERROR,
  error: error,
});
