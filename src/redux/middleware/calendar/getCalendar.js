import axios from "axios";
import {
  getCalendarSuccess,
  calendarError,
  calendarPending,
} from "../../actions/calendarActions";

// function passed to home component
function getCalendar(groupID) {
  return (dispatch) => {
    dispatch(calendarPending());
    const date = new Date();
    axios({
      method: "get",
      url: "/api/current_user/get_calendar/",
      params: { groupID: groupID, timezone: date.getTimezoneOffset() }, // for current timezone ---> 300
    })
      .then((res) => {
        dispatch(getCalendarSuccess(groupID, res.data));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if ("response" in error) {
          errorMsg = error.response;
        }
        dispatch(calendarError(errorMsg));
      });
  };
}

export default getCalendar;
