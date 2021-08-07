import { Component } from "react";
import classes from "../../../styles/home-page/invite.module.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import acceptInvite from "../../../redux/middleware/groups/acceptInvite";
import declineInvite from "../../../redux/middleware/groups/declineInvite";
import getInvites from "../../../redux/middleware/groups/getInvites";
import getGroups from "../../../redux/middleware/groups/getGroups";

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupID: this.props.groupID,
      inviteID: this.props.inviteID,
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  handleAccept() {
    this.props.acceptInvite(this.state.groupID, this.state.inviteID);
    this.props.getInvites();
    this.props.getGroups();
  }

  handleReject() {
    this.props.declineInvite(this.state.groupID, this.state.inviteID);
    this.props.getInvites();
  }

  render() {
    return (
      <div className={classes.groupInvite}>
        <h4>{this.props.groupName}</h4>
        <h5>
          from {this.props.from.first_name} {this.props.from.last_name}
        </h5>
        <h5 className={classes.username}>(@{this.props.from.username})</h5>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="success"
            onClick={this.handleAccept}
          >
            Accept
          </Button>
          <Button
            className={classes.button}
            variant="danger"
            onClick={this.handleReject}
          >
            Reject
          </Button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      acceptInvite: acceptInvite,
      declineInvite: declineInvite,
      getInvites: getInvites,
      getGroups: getGroups,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Invite);
