import axios from "axios";
import Refresh from "../security/refresh.js";

class UserInfo extends Refresh {
  static username = null; // user's username
  static email = null; // user's username
  static firstName = null; // user's first name
  static lastName = null; // user's last name

  // function called when user logs in with credentials, generates tokens
  async login(username, password) {
    return axios({
      method: "post",
      url: "/api/token/",
      data: {
        username: username,
        password: password,
      },
    })
      .then(this.handleSuccessLogin)
      .catch(this.handleError);
  }

  // function for logging out. Clears all class variables and stored tokens
  logout() {
    UserInfo.accessToken = null;
    UserInfo.refreshToken = null;
    UserInfo.username = null;
    UserInfo.email = null;
    UserInfo.firstName = null;
    UserInfo.lastName = null;

    localStorage.setItem("access", UserInfo.accessToken);
    localStorage.setItem("refresh", UserInfo.refreshToken);
  }

  // function called when user signs up and generates tokens
  async signup(firstName, lastName, email, username, password) {
    return axios({
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
      .then(this.handleSuccessSignup)
      .catch(this.handleError);
  }

  // method that returns user info as a dict. Makes an API call if any of it is not defined.
  getUserInfo() {
    if (
      UserInfo.username &&
      UserInfo.firstName &&
      UserInfo.lastName &&
      UserInfo.email
    ) {
      return {
        username: UserInfo.username,
        firstName: UserInfo.firstName,
        lastName: UserInfo.lastName,
        email: UserInfo.email,
      };
    }

    // if data not defined, make API call
    return axios({
      method: "get",
      url: "/api/current_user/",
      header: {
        Bearer: "JWT " + UserInfo.accessToken,
      },
    })
      .then(this.handleSuccessGetUserInfo)
      .catch(this.handleErrorGetUserInfo);
  }

  // method that deletes the current user
  deleteUser() {
    // if data not defined, make API call
    return axios({
      method: "delete",
      url: "/api/current_user/",
      header: {
        Bearer: "JWT " + UserInfo.accessToken,
      },
    })
      .then(this.handleSuccessDeleteUser)
      .catch(this.handleErrorDeleteUser);
  }

  // helper function used for login
  handleSuccessLogin(response) {
    UserInfo.accessToken = response.data.access;
    UserInfo.refreshToken = response.data.refresh;

    UserInfo.username = response.data.user.username;
    UserInfo.email = response.data.user.email;
    UserInfo.firstName = response.data.user.first_name;
    UserInfo.lastName = response.data.user.last_name;

    localStorage.setItem("access", UserInfo.accessToken);
    localStorage.setItem("refresh", UserInfo.refreshToken);
    return true;
  }

  // helper function used for signup
  handleSuccessSignup(response) {
    UserInfo.accessToken = response.data.access;
    UserInfo.refreshToken = response.data.refresh;

    UserInfo.username = response.data.username;
    UserInfo.email = response.data.email;
    UserInfo.firstName = response.data.first_name;
    UserInfo.lastName = response.data.last_name;

    localStorage.setItem("access", UserInfo.accessToken);
    localStorage.setItem("refresh", UserInfo.refreshToken);
    return true;
  }

  // method that gets user info from response and returns it as dictionary
  handleSuccessGetUserInfo(response) {
    UserInfo.username = response.data.username;
    UserInfo.email = response.data.email;
    UserInfo.firstName = response.data.first_name;
    UserInfo.lastName = response.data.last_name;

    return {
      username: UserInfo.username,
      firstName: UserInfo.firstName,
      lastName: UserInfo.lastName,
      email: UserInfo.email,
    };
  }

  // function which handles the first error on trying to fetch user info
  handleErrorGetUserInfo(error) {
    const result = this.refresh(); // try to refresh token

    if (result) {
      // if successful, get user info again
      return axios({
        method: "get",
        url: "/api/current_user/",
        header: {
          Bearer: "JWT " + UserInfo.accessToken,
        },
      })
        .then(this.handleSuccessG)
        .catch(this.handleError); // on second failure, just call standard error handler
    } else {
      // user refresh token expired, log out
      this.logout();
      return false;
    }
  }

  // function which handles successful user deletion
  handleSuccessDeleteUser() {
    return true;
  }

  // function which handles a failure to delete a user
  handleErrorDeleteUser(error) {
    const result = this.refresh(); // try to refresh token

    if (result) {
      // if successful, try to delete user again
      return axios({
        method: "delete",
        url: "/api/current_user/",
        header: {
          Bearer: "JWT " + UserInfo.accessToken,
        },
      })
        .then(this.handleSuccessDeleteUser)
        .catch(this.handleError); // on second failure, just call standard error handler
    } else {
      // user refresh token expired, logoit
      this.logout();
      return false;
    }
  }
}

export default UserInfo;