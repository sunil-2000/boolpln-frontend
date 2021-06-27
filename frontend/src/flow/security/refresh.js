import axios from "axios";

class Refresh {
  static accessToken = null; // most recent access JwtToken
  static refreshToken = null; // most recent refresh JwtToken

  constructor() {
    // constructor for refresh obje
    Refresh.accessToken = localStorage.getItem("access"); // get access token if exists
    Refresh.refreshToken = localStorage.getItem("refresh"); // get refresh token if it exists
  }

  // refresh function for fetching new jwt token
  async refresh() {
    return axios({
      method: "post",
      url: "/api/token/refresh/",
      skipAuthRefresh: true,
      data: {
        refresh: Refresh.refreshToken,
      },
    })
      .then(this.handleSuccessRefresh)
      .catch(this.handleError);
  }

  // helper function used for refresh
  handleSuccessRefresh(response) {
    console.log("in success refresh");
    Refresh.accessToken = response.data.access;
    localStorage.setItem("access", Refresh.accessToken);
    return true;
  }

  // helper function used on error
  handleError(error) {
    console.log("error");
    // console.log(error.response.statusText);
    // console.log(error.response.status);
    console.log(error);
    return false;
  }
}

export default Refresh; // export class
