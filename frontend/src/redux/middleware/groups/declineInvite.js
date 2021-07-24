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
      method: "post",
      url: "/api/current_user/accept_invite/",
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
        if (error.response.status) {
          errorMsg = error.response.status;
        }
        dispatch(groupError(errorMsg));
      });
  };
}
export default declineInvite;
