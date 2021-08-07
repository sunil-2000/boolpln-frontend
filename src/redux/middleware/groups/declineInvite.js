import {
  groupError,
  groupPending,
  declineInviteSuccess,
} from "../../actions/groupApiActions";
import axios from "axios";

function declineInvite(groupID, inviteID) {
  return (dispatch) => {
    dispatch(groupPending());
    return axios({
      method: "delete",
      url: "/api/current_user/decline_invite/",
      data: {
        groupID: groupID,
      },
    })
      .then((res) => {
        if (res.status === 204) {
          dispatch(declineInviteSuccess(inviteID));
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
export default declineInvite;
