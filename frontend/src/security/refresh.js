import axios from "axios";

class Refresh {
  static accessToken = null; // most recent access JwtToken
  static refreshToken = null; // most recent refresh JwtToken
  static username = null; // user's username
  static firstName = null; // user's first name
  static lastName = null; // user's last name

  constructor() {
    // constructor for refresh object
    Refresh.accessToken = localStorage.getItem("access"); // get access token if exists
    Refresh.refreshToken = localStorage.getItem("refresh"); // get refresh token if it exists
  }

  // refresh function for fetching new jwt token
  refresh() {
    axios({
      method: "post",
      url: "/api/token/refresh/",
      data: {
        refresh: Refresh.refreshToken,
      },
    })
      .then(this.handleSuccess)
      .catch(this.handleError);
  }
  // function called when user logs in with credentials
  login(username, password) {
    axios({
      method: "post",
      url: "/api/token-auth/",
      data: {
        username: username,
        password: password,
      },
    })
      .then(this.handleSuccessLogin)
      .catch(this.handleError);
  }

  // function called when user signs up and generates jwt Token
  signup(firstName, lastName, email, username, password) {
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
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  // helper function used for login / signup
  handleSuccessLogin(response) {
    console.log("in handle success for login");
    Refresh.accessToken = response.data.access;
    Refresh.refreshToken = response.data.refresh;

    Refresh.username = response.data.user.username;
    Refresh.firstName = response.data.user.first_name;
    Refresh.lastName = response.data.user.last_name;

    console.log(Refresh.accessToken);
    console.log(Refresh.refreshToken);
    console.log(Refresh.username);
    console.log(Refresh.firstName);
    console.log(Refresh.lastName);

    localStorage.setItem("access", Refresh.accessToken);
    localStorage.setItem("refresh", Refresh.refreshToken);
  }

  handleSuccess(response) {
    Refresh.accessToken = response.data.access;
    Refresh.refreshToken = response.data.refresh;
    console.log("in success");
  }

  // helper function used for login / signup
  handleError(error) {
    console.log("error");
    console.log(error.response.statusText);
    console.log(error.response.status);
  }
}

export default Refresh;
