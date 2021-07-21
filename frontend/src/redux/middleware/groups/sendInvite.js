import {
  groupError,
  sendInviteSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function sendInvite(groupID, userName) {
  return (dispatch) => {
    dispatch(groupPending());
    axios({
      method: "post",
      url: "/api/current_user/invite_members/",
      data: {
        groupID: groupID,
        username: userName,
      },
    })
      .then((res) => {
        dispatch(sendInviteSuccess(groupID, res.data.groupID));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        console.log(error);
        if (error.response.status) {
          errorMsg = error.response.status;
        }
        dispatch(groupError(errorMsg));
      });
  };
}

export default sendInvite;
