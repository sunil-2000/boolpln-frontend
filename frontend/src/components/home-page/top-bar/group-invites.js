import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import React from "react";

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

  renderInvite(invite) {
    // create Invite objects
  }

  renderInvites(data) {
    let inviteList = [];
    data.forEach((element) => {
      // process element by packaging it into div
      // by calling renderInvite
      //append to inviteList
    });
    return inviteList;
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
          <Modal.Body>
            <div>
              <h4>Dummy Text</h4>
              <p>DUmmmadfskjadsfkadfaldkjfhdfjlkhaslfdjhs</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default GroupInvites;
