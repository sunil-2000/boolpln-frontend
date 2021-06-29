import { Component } from "react";
import { Nav } from "react-bootstrap";
import UserInfo from "../../../flow/user-info/user-info.js";
import GroupInvites from "./group-invites.js";
import React from "react";
import GroupInfo from "../../../flow/group-info/group-info";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      settings: false,
      show: false,
      activeKey: "home",
      data: new Array(),
      // activeKey does not currently work, should reset
      // ui selector on bell after closing from pop up modal (small issue)
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  render() {
    const alert = " 🔔 ";
    const setting = " ⚙️ ";

    return (
      <>
        <Nav
          variant='pills'
          defaultActiveKey={this.state.activeKey}
          className='justify-content-end'
        >
          <Nav.Item>
            <Nav.Link eventKey='home' href='/'>
              My Calendars
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='alert' onSelect={this.handleShow}>
              {alert}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='logout'
              href='/start'
              onSelect={() => UserInfo.logout()}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='settings'
              title='Item'
              onSelect={this.handleClose}
            >
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
      </>
    );
  }
}
export default NavBar;
