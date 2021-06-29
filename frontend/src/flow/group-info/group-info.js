import axios from "axios";
import Refresh from "../security/refresh.js";

class GroupInfo extends Refresh {
  // method that creates a group
  static async createGroup(groupName) {
    return axios({
      method: "post",
      url: "/api/current_user/create_group/",
      groupName: groupName,
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that sends an invite
  static async sendInvite(groupID, userName) {
    return axios({
      method: "post",
      url: "/api/current_user/invite_member/",
      groupID: groupID,
      username: userName,
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that accepts an invite
  static async acceptInvite(groupID, userName) {
    return axios({
      method: "post",
      url: "/api/current_user/accept_invite/",
      groupID: groupID,
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that gets a user's invites
  static async getInvites() {
    return axios({
      method: "get",
      url: "/api/current_user/get_pending_groups/",
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method which returns data from api calls that return data
  static handleSuccessReturnData(response) {
    console.log("inside handle");
    console.log(response.data);
    return response.data;
  }
}

export default GroupInfo;
