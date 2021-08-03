import {
  groupError,
  leaveGroupSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function leaveGroup(groupID) {
  return (dispatch) => {
    dispatch(groupPending());
    axios({
      method: "delete",
      url: "api/current_user/leave_group/",
      data: { groupID: groupID },
    })
      .then((res) => {
        if (res.status === 204) {
          dispatch(leaveGroupSuccess(groupID, res.data));
        } else {
          dispatch(groupError(res + " in leave group"));
        }
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if ("response" in error) {
          errorMsg = error.response;
        }
        dispatch(groupError(errorMsg));
      });
  };
}
export default leaveGroup;
