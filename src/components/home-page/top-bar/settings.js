import { Component } from "react";
import { Modal } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import {
  getUsername,
  getFirstName,
  getLastName,
  getEmail,
} from "../../../redux/reducers/userApiReducer";

class Settings extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          aria-labelledby="90polk--contained-modal-title-vcenter"
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Hi {this.props.firstName}!</h1>
            <h2>Account Info:</h2>
            <p>Username: {this.props.username}</p>
            <p>Email: {this.props.email}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  username: getUsername(state),
  firstName: getFirstName(state),
  lastName: getLastName(state),
  email: getEmail(state),
});

export default connect(mapStateToProps)(Settings);
