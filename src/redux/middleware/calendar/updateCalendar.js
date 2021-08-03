import axios from "axios";
import {
  updateCalendarSuccess,
  calendarError,
  calendarPending,
} from "../../actions/calendarActions";

// function passed to home component
function updateCalendar(groupID, weekData) {
  return (dispatch) => {
    dispatch(calendarPending());
    const date = new Date();
    console.log(groupID);
    console.log(weekData);
    axios({
      method: "post",
      url: "/api/current_user/update_calendar/",
      data: {
        groupID: groupID,
        timezone: date.getTimezoneOffset(),
        week: weekData,
      },
    })
      .then((res) => {
        dispatch(updateCalendarSuccess(res.data));
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

export default updateCalendar;
