import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import React from "react";

class GroupInvites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  // functions to handle showing / closing popups
  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  renderInvite(invite) {}

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
        <Button variant='primary' onClick={this.handleShow}>
          Launch static backdrop modal
        </Button>

        <Modal
          show={this.state.show}
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
