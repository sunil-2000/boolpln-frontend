import { FETCH_DAYS, NEW_DAYS } from "../actions/types";

const initialState = {
  days: [],
};

function dayComparator(i, j) {
  return i > j ? 1 : -1;
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case NEW_DAYS:
      let { date, timeSlots } = action.payload;
      const utcDate =
        date.getUTCDate() +
        "/" +
        date.getUTCMonth() +
        "/" +
        date.getUTCFullYear();

      let itemsCopy = [...state.days];
      let updated = itemsCopy.filter((i) => i.utcDate !== utcDate);
      updated.push({ date: date, utcDate: utcDate, timeSlots: timeSlots });
      updated.sort((i, j) => dayComparator(i.date, j.date));
      return {
        days: updated,
      };
  }
}
