import axios from "axios";
import Refresh from "../security/refresh.js";

class GroupInfo extends Refresh {
  sendInvite(accessToken, endpoint, groupId, userName) {
    axios
      .post(
        endpoint,
        {
          groupID: groupId,
          username: userName,
        },
        {
          headers: {
            Bearer: "JWT " + accessToken,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  getInvite(accessToken, endpoint) {
    axios
      .get(endpoint, {
        headers: {
          Bearer: "JWT " + accessToken,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }
}
export default GroupInfo;
