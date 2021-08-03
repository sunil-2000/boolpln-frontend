import {
  loginSuccess,
  userError,
  userPending,
} from "../../actions/userApiActions";
import axios from "axios";

function login(username, password) {
  return (dispatch) => {
    dispatch(userPending);
    axios({
      method: "post",
      url: "/api/token/",
      data: { username: username, password: password },
    })
      .then((res) => {
        dispatch(loginSuccess(res.data));
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

export default login;
