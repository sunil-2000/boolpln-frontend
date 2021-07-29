import { Component } from "react";
import { Nav } from "react-bootstrap";
import UserInfo from "../../../flow/user-info/user-info.js";
import GroupInvites from "./group-invites.js";
import React from "react";
import GroupInfo from "../../../flow/group-info/group-info";
import Settings from "./settings.js";
import getUserInfo from "../../../redux/middleware/user/getUserInfo.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      settings: false,
      show: false,
      showSettings: false,
      activeKey: "home",
      data: [],
      userData: {},
      // activeKey does not currently work, should reset
      // ui selector on bell after closing from pop up modal (small issue)
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleShowSettings = this.handleShowSettings.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseSettings = this.handleCloseSettings.bind(this);
  }

  // handleShow used for notification click action
  async handleShow() {
    await this.setState({ show: true });
    let inviteList = await GroupInfo.getInvites();
    await this.setState({ data: inviteList });
  }
  // handleClose used for notification popup close action
  async handleClose() {
    await this.setState({ show: false, activeKey: "" });
  }

  // handleShowSettings used for setting click action
  async handleShowSettings() {
    await this.setState({ showSettings: true });
    await this.setState({ userData: getUserInfo() });
    console.log(this.props.userData);
  }

  // handleShowSettings used for setting popup close action
  async handleCloseSettings() {
    await this.setState({ showSettings: false, activeKey: "" });
  }

  render() {
    const alert = " 🔔 ";
    const setting = " ⚙️ ";

    return (
      <>
        <Nav
          variant="pills"
          defaultActiveKey={this.state.activeKey}
          className="justify-content-end"
        >
          <Nav.Item>
            <Nav.Link eventKey="home" href="/">
              My Calendars
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="alert" onSelect={this.handleShow}>
              {alert}
              {console.log(this.state.showSettings)}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="logout"
              href="/start"
              onSelect={() => UserInfo.logout()}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings" onSelect={this.handleShowSettings}>
              {setting}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <GroupInvites
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          data={this.state.data}
        />
        <Settings
          show={this.state.showSettings}
          handleCloseSettings={this.handleCloseSettings}
          handleShowSettings={this.handleShowSettings}
          userData={this.state.userData}
        />
      </>
    );
  }
}

export default NavBar;
