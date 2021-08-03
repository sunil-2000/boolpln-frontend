import {
  groupError,
  createGroupSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function createGroup(groupName) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(groupPending());
      axios({
        method: "post",
        url: "api/current_user/create_group/",
        data: { groupName: groupName },
      })
        .then((res) => {
          dispatch(createGroupSuccess(groupName, res.data.groupID));
          resolve();
        })
        .catch((error) => {
          let errorMsg = "fatal error";
          console.log(error);
          if ("response" in error) {
            errorMsg = error.response;
          }
          dispatch(groupError(errorMsg));
          reject();
        });
    });
}
export default createGroup;
