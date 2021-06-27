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

  // method that gets a user's invites
  async getInvites() {
    return axios({
      method: "get",
      url: "/api/current_user/get_pending_groups/",
    })
      .then(this.handleSuccessGetInvites)
      .catch(this.handleError);
  }

  // method which parses user invites on success
  handleSuccessGetInvites(response) {
    console.log("inside handle");
    console.log(response.data);
    return response.data;
  }
}
export default GroupInfo;
