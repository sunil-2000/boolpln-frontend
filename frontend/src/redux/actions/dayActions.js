import { NEW_DAYS } from "./types";
export const addDay = (date, timeSlots) => ({
  type: NEW_DAYS,
  payload: {
    date,
    timeSlots,
  },
});
