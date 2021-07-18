import {
  getGroupsPending,
  getGroupsSuccess,
  getGroupsError,
} from "../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function getGroups() {
  return (dispatch) => {
    dispatch(getGroupsPending());
    axios({
      method: "get",
      url: "/api/current_user/get_joined_groups/",
    })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getGroupsSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(getGroupsError(error)));
  };
}

export default getGroups;
