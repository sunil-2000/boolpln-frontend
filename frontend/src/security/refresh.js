import axios from "axios";

class Refresh {
  jwtToken; // most recent JwtToken

  constructor() {
    // constructor for refresh object
    this.jwtToken = localStorage.getItem("jwt"); // get token if exists
  }

  // refresh function for fetching new jwt token
  refresh() {
    axios({
      method: "post",
      url: "/api/token-auth/",
      data: {
        username: username,
        password: password,
      },
    })
      .then(handleSuccess)
      .catch(handleError);
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
      .then(handleSuccess)
      .catch(handleError);
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
      .then(handleSuccess)
      .catch(handleError);
  }

  // helper function used for login / signup
  handleSuccess(response) {
    console.log("in handle success");
    console.log(this.jwtToken);
    this.jwtToken = response.data.token;
    localStorage.setItem("jwt");
    console.log("token" + this.jwtToken);
  }

  // helper function used for login / signup
  handleError(error) {
    console.log("error");
    console.log(error.response.statusText);
    console.log(error.response.status);
  }
}
