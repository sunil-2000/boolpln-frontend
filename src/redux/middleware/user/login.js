import {
  loginSuccess,
  userError,
  userPending,
} from "../../actions/userApiActions";
import axios from "axios";

function login(username, password) {
  return (dispatch) => {
    dispatch(userPending());
    axios({
      method: "post",
      url: "/api/token/",
      data: { username: username, password: password },
      skipAuthRefresh: true,
    })
      .then((res) => {
        dispatch(loginSuccess(res.data));
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

export default login;
