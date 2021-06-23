import Refresh from "./refresh.js";
import { Redirect } from "react-router-dom";

// class which does routing based on if existing credentials are good or not
class Credentials {
  // method which changes paths based on if user is logged in
  async checkCredentials() {
    // run refresh
    const refresh = new Refresh();
    const result = await refresh.refresh();

    // if true, there is a valid user so log in (get user info
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}

export default Credentials; // export class
