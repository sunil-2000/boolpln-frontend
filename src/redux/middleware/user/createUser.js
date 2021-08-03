import {
  createUserSuccess,
  userError,
  userPending,
} from "../../actions/userApiActions";
import axios from "axios";

function createUser(firstName, lastName, email, username, password) {
  return (dispatch) => {
    dispatch(userPending);
    axios({
      method: "post",
      url: "/api/users/",
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
      },
    })
      .then((res) => {
        dispatch(createUserSuccess(res.data));
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
