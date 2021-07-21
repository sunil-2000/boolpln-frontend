import {
  groupError,
  sendInviteSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function sendInvite(groupID, userName) {
  const cleanedUsers = userName.map((user) => user.groupMember);
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(groupPending());
      axios({
        method: "post",
        url: "/api/current_user/invite_members/",
        data: {
          groupID: groupID,
          usersToInvite: cleanedUsers,
        },
      })
        .then((res) => {
          dispatch(sendInviteSuccess(groupID, res.data.groupID));
          resolve();
        })
        .catch((error) => {
          let errorMsg = "fatal error";
          console.log(error);
          if (error.response.status) {
            errorMsg = error.response.status;
          }
          dispatch(groupError(errorMsg));
          reject();
        });
    });
}

export default sendInvite;
