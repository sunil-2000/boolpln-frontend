import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import React from "react";
import Invite from "./invite.js";

import { connect } from "react-redux";
import { getInvites } from "../../../redux/reducers/groupApiReducer";

class GroupInvites extends Component {
  renderInvites() {
    const inviteList = this.props.groupInvites;
    if (inviteList.length === 0) {
      return (
        <div>
          <h4>No Invites!</h4>
          <p>Check back later or invite friends!</p>
        </div>
      );
    } else {
      let result = [];
      console.log(inviteList);
      inviteList.forEach((i) => {
        // process element by packaging it into div
        // by calling renderInvite
        //append to inviteList
        let inviteElt = (
          <Invite
            from={i.invitingUser}
            groupName={i.group.groupName}
            groupID={i.group.groupID}
            inviteID={i.inviteID}
            key={i.inviteID + ", " + i.group.groupID}
          />
        );
        result.push(inviteElt);
      });
      return result;
    }
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          aria-labelledby='90polk--contained-modal-title-vcenter'
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Group Notifications
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderInvites()}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  groupInvites: getInvites(state),
});

export default connect(mapStateToProps)(GroupInvites);
