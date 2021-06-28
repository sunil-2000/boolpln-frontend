import { Component } from "react";
import classes from "../../../styles/home-page/invite.module.css";
import { Button } from "react-bootstrap";

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupID: "",
    };
  }
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
        <h5>
          from {this.props.from.first_name} {this.props.from.last_name}
        </h5>
        <h5 className={classes.username}>{this.props.from.username}</h5>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant='success'
            onChange={this.handleAccept}
          >
            Accept
          </Button>
          <Button
            className={classes.button}
            variant='danger'
            onChange={this.handleReject}
          >
            Reject
          </Button>
        </div>
      </div>
    );
  }
}
export default Invite;
