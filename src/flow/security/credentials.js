import Refresh from "./refresh.js";

// class which does routing based on if existing credentials are good or not
class Credentials extends Refresh {
  // method which changes paths based on if user is logged in
  static async checkCredentials() {
    // run refresh
    const result = await this.refresh();

    // if true, there is a valid user so log in (get user info
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}

export default Credentials; // export class
