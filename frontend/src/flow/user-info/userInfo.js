import axios from "axios";

class UserInfo {
  getUserInfo(accessToken, endpoint) {
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
