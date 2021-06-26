import Component from "react";
import classes from "../../../styles/home-page/invite.module.css";

class Invite extends Component {
  render() {
    return (
      <div className={classes.groupInvite}>
        <h4>Centered Modal</h4>
        <p>
          Dummy Text where group notifications will be dynamically generated...
          each group invite gets seperate div that is appended to this section.
        </p>
      </div>
    );
  }
}
export default Invite;
