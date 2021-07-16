import { FETCH_DAYS, NEW_DAYS } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  console.log("in reduce");
  switch (action.type) {
    default:
      return state;
    case NEW_DAYS:
      console.log(state.items);
      const { date, timeSlots } = action.payload;
      return {
        ...state,
        items: [...state.items, { date: date, timeSlots: timeSlots }],
      };
  }
}
