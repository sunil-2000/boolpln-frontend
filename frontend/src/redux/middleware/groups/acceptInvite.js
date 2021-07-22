import {
  groupError,
  acceptInviteSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

function acceptInvite(groupID) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(groupPending());
      return axios({
        method: "post",
        url: "/api/current_user/accept_invite/",
        data: {
          groupID: groupID,
        },
      })
        .then((res) => {
          dispatch(acceptInviteSuccess(res.data));
          resolve();
        })
        .catch((error) => {
          let errorMsg = "fatal error";
          if (error.response.status) {
            errorMsg = error.response.status;
          }
          dispatch(groupError(errorMsg));
          reject();
        });
    });
}
export default acceptInvite;
