import {
  getUserSuccess,
  userPending,
  userError,
} from "../../actions/userActions";
import axios from "axios";

// function passed to home component
function getUserInfo() {
  return (dispatch) => {
    dispatch(userPending());
    axios({
      method: "get",
      url: "api/current_user/",
    })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if (error.response) {
          errorMsg = error.response.status;
        }
        dispatch(userError(errorMsg));
      });
  };
}

export default getUserInfo;
