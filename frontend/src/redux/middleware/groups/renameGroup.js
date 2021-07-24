import {
  groupError,
  renameGroupSuccess,
  groupPending,
} from "../../actions/groupApiActions";
import axios from "axios";

// function passed to home component
function renameGroup(groupID, proposedName) {
  return (dispatch) => {
    dispatch(groupPending());
    axios({
      method: "put",
      url: "api/current_user/rename_group/",
      data: { groupID: groupID, groupName: proposedName },
    })
      .then((res) => {
        dispatch(renameGroupSuccess(res.data));
      })
      .catch((error) => {
        let errorMsg = "fatal error";
        if (error.response.status) {
          errorMsg = error.response.status;
        }
        dispatch(groupError(errorMsg));
      });
  };
}
export default renameGroup;
