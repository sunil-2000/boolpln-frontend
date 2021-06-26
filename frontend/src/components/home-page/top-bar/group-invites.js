import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import React from "react";
import Invite from "./invite.js";

class GroupInvites extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  // functions to handle showing / closing popups
  handleShow() {
    this.props.handleShow();
  }
  handleClose() {
    this.props.handleClose();
  }

  renderInvites(inviteList) {
    if (inviteList.length === 0) {
      return (
        <div>
          <h4>No Invites!</h4>
          <p>Check back later or invite friends!</p>
        </div>
      );
    } else {
      let result = [];

      inviteList.forEach((i) => {
        // process element by packaging it into div
        // by calling renderInvite
        //append to inviteList
        let inviteElt = <Invite groupName={i.groupName} key={i.groupID} />;
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
          onHide={this.handleClose}
          aria-labelledby='90polk--contained-modal-title-vcenter'
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Group Notifications
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderInvites(this.props.data)}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default GroupInvites;
