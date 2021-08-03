import {
  refreshSuccess,
  logout,
  userError,
  userPending,
} from "../../actions/userApiActions";
import axios from "axios";

function refresh(refreshToken) {
  return (dispatch) => {
    dispatch(userPending);
    axios({
      method: "post",
      url: "/api/token/refresh/",
      data: { refresh: refreshToken },
    })
      .then((res) => {
        dispatch(refreshSuccess(res.data));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if (error.response) {
          errorMsg = error.response.status;
          if (errorMsg === 401) {
            dispatch(logout());
            return;
          }
        }
        dispatch(userError(errorMsg));
      });
  };
}

export default refresh;
