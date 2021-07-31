import { Component } from "react";
import { Nav } from "react-bootstrap";
import UserInfo from "../../../flow/user-info/user-info.js";
import GroupInvites from "./group-invites";
import Settings from "./settings";
import React from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      settings: false,
      activeKey: "home",
      // activeKey does not currently work, should reset
      // ui selector on bell after closing from pop up modal (small issue)
    };
    this.handleClose = this.handleClose.bind(this);
  }
  // handleClose used for notification popup close action
  async handleClose() {
    await this.setState({ show: false, activeKey: "" });
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
            <Nav.Link
              eventKey="alert"
              onSelect={() => this.setState({ notifications: true })}
            >
              {alert}
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
            <Nav.Link
              eventKey="settings"
              title="Item"
              onSelect={() => this.setState({ settings: true })}
            >
              {setting}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <GroupInvites
          show={this.state.notifications}
          handleClose={() => this.setState({ notifications: false })}
        />
        <Settings
          show={this.state.settings}
          handleClose={() => this.setState({ settings: false })}
        />
      </>
    );
  }
}
export default NavBar;
