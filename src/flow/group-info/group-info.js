import axios from "axios";
import Refresh from "../security/refresh.js";

class GroupInfo extends Refresh {
  // method that creates a group
  static async createGroup(groupName) {
    return axios({
      method: "post",
      url: "/api/current_user/create_group/",
      data: {
        groupName: groupName,
      }
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that sends an invite
  static async sendInvite(groupID, userName) {
    return axios({
      method: "post",
      url: "/api/current_user/invite_member/",
      data: {
        groupID: groupID,
        username: userName,
      }
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that accepts an invite
  static async acceptInvite(groupID) {
    return axios({
      method: "post",
      url: "/api/current_user/accept_invite/",
      data: {
        groupID: groupID,
      }
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that lets a user leave a group
  static async leaveGroup(groupID) {
    return axios({
      method: "delete",
      url: "/api/current_user/leave_group/",
      data: {
        group: groupID
      } 
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that lets a user leave a group
  static async declineInvite(groupID) {
    return axios({
      method: "delete",
      url: "/api/current_user/decline_invite/",
      data: {
        group: groupID
      } 
    })
      .then(this.handleSuccessReturnData)
      .catch(this.handleError);
  }

  // method that gets a user's groups
  static async getGroups() {
    return axios({
      method: "get",
      url: "/api/current_user/get_joined_groups/",
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

  // method that gets a user's invites
  static async renameGroup(groupID, groupName) {
    return axios({
      method: "put",
      url: "/api/current_user/rename_group/",
      data: {
        groupID: groupID,
        groupName: groupName
      }
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
