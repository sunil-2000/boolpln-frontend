import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import React from "react";
import Invite from "./invite.js";
import { connect } from "react-redux";
import getUsername from "../../../redux/reducers/userReducer.js";
import getUserInfo from "../../../redux/middleware/user/getUserInfo.js";
import { bindActionCreators } from "redux";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleShowSettings = this.handleShowSettings.bind(this);
    this.handleCloseSettings = this.handleCloseSettings.bind(this);
  }
  componentDidMount() {
    this.props.getUserInfo();
  }
  // functions to handle showing / closing popups
  handleShowSettings() {
    this.props.handleShowSettings();
  }
  handleCloseSettings() {
    this.props.handleCloseSettings();
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.handleCloseSettings}
          aria-labelledby="90polk--contained-modal-title-vcenter"
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              User Settings
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseSettings}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUserInfo: getUserInfo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
