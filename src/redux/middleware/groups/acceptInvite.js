import {
  groupError,
  acceptInviteSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

function acceptInvite(groupID, inviteID) {
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
        dispatch(acceptInviteSuccess(res.data, inviteID));
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
export default acceptInvite;
