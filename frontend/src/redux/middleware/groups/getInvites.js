import {
  groupPending,
  getInvitesSuccess,
  groupError,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function getInvites() {
  console.log("in get groups");
  return (dispatch) => {
    dispatch(groupPending());
    axios({
      method: "get",
      url: "/api/current_user/get_pending_groups/",
    })
      .then((res) => {
        dispatch(getInvitesSuccess(res.data));
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

export default getInvites;
