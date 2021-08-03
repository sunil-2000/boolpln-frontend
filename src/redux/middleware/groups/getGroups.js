import {
  groupError,
  getGroupsSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function getGroups() {
  return (dispatch) => {
    dispatch(groupPending());
    axios({
      method: "get",
      url: "/api/current_user/get_joined_groups/",
    })
      .then((res) => {
        dispatch(getGroupsSuccess(res.data));
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

export default getGroups;
