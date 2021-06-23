import axios from "axios";

class Refresh {
  static accessToken = null; // most recent access JwtToken
  static refreshToken = null; // most recent refresh JwtToken
  static username = null; // user's username
  static email = null; // user's username
  static firstName = null; // user's first name
  static lastName = null; // user's last name

  constructor() {
    // constructor for refresh object
    Refresh.accessToken = localStorage.getItem("access"); // get access token if exists
    Refresh.refreshToken = localStorage.getItem("refresh"); // get refresh token if it exists
  }

  // refresh function for fetching new jwt token
  refresh() {
    return axios({
      method: "post",
      url: "/api/token/refresh/",
      data: {
        refresh: Refresh.refreshToken,
      },
    })
      .then(this.handleSuccessRefresh)
      .catch(this.handleError);
  }

  // function called when user logs in with credentials, generates tokens
  login(username, password) {
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

  // function called when user signs up and generates tokens
  signup(firstName, lastName, email, username, password) {
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

  // helper function used for login
  handleSuccessLogin(response) {
    console.log("in handle success for login");
    Refresh.accessToken = response.data.access;
    Refresh.refreshToken = response.data.refresh;

    Refresh.username = response.data.user.username;
    Refresh.username = response.data.user.email;
    Refresh.firstName = response.data.user.first_name;
    Refresh.lastName = response.data.user.last_name;

    console.log(Refresh.accessToken);
    console.log(Refresh.refreshToken);
    console.log(Refresh.username);
    console.log(Refresh.email);
    console.log(Refresh.firstName);
    console.log(Refresh.lastName);

    localStorage.setItem("access", Refresh.accessToken);
    localStorage.setItem("refresh", Refresh.refreshToken);
    return true;
  }

  // helper function used for signup
  handleSuccessSignup(response) {
    console.log("in handle success for signup");
    Refresh.accessToken = response.data.access;
    Refresh.refreshToken = response.data.refresh;

    Refresh.username = response.data.username;
    Refresh.username = response.data.email;
    Refresh.firstName = response.data.first_name;
    Refresh.lastName = response.data.last_name;

    console.log(Refresh.accessToken);
    console.log(Refresh.refreshToken);
    console.log(Refresh.username);
    console.log(Refresh.email);
    console.log(Refresh.firstName);
    console.log(Refresh.lastName);

    localStorage.setItem("access", Refresh.accessToken);
    localStorage.setItem("refresh", Refresh.refreshToken);
    return true;
  }

<<<<<<< HEAD
  handleSuccess(response) {
    Refresh.accessToken = response.data.access;
    Refresh.refreshToken = response.data.refresh;
    console.log("in success");
=======
  // helper function used for refresh
  handleSuccessRefresh(response) {
    console.log("in handle success for refresh");

    Refresh.accessToken = response.data.access;
    console.log(Refresh.accessToken);
    localStorage.setItem("access", Refresh.accessToken);

    return true;
>>>>>>> eb0d7d8ae21c12ff141700fc3f491c1b870ef509
  }

  // helper function used on error
  handleError(error) {
    console.log("error");
    console.log(error.response.statusText);
    console.log(error.response.status);
    return false;
  }
}

export default Refresh;
