import {
  getUserSuccess,
  userError,
  userPending,
} from "../../actions/userApiActions";
import axios from "axios";

function getUser() {
  return (dispatch) => {
    dispatch(userPending);
    axios({ method: "get", url: "/api/current_user" })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if ("response" in error) {
          errorMsg = error.response;
        }
        dispatch(userError(errorMsg));
      });
  };
}

export default getUser;
