import Component from "react";
import classes from "../../../styles/home-page/invite.module.css";
import { Button } from "react-bootstrap";
class Invite extends Component {
  handleAccept() {
    // function that handles accept for group invitation
  }

  handleReject() {
    // function that handles reject for group invitation
  }

  render() {
    return (
      <div className={classes.groupInvite}>
        <h4>{this.props.groupName}</h4>
        <div className={classes.buttonContainer}>
          <Button variant='success' onChange={this.handleAccept}></Button>
          <Button variant='danger' onChange={this.handleReject}></Button>
        </div>
      </div>
    );
  }
}
export default Invite;
