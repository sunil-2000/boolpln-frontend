import { NEW_DAYS } from "../types";

// all actions for day interactions in the calendar

// updates current calendar
export const addDay = (date, timeSlots) => ({
  type: NEW_DAYS,
  payload: {
    date,
    timeSlots,
  },
});
