import { logout, userError, userPending } from "../../actions/userApiActions";
import axios from "axios";

function deleteUser() {
  return (dispatch) => {
    dispatch(userPending());
    axios({ method: "delete", url: "/api/current_user/" })
      .then((res) => {
        dispatch(logout);
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

export default deleteUser;
