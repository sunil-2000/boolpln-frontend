import { Component, useState } from "react";
import { Nav } from "react-bootstrap";
import UserInfo from "../../../flow/user-info/user-info.js";
import GroupInvites from "./group-invites.js";
import React from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      settings: false,
      show: false,
    };
    this.handleChange = this.handleChange.bind();
    this.handleClose = this.handleClose.bind();
  }
  // call some api method to get list of notifications for particular user
  // when component mounts
  componentDidMount() {}

  // updates based on navbar actions by user
  shouldComponentUpdate() {
    if (this.state.notifications || this.state.settings) {
      return true;
    }
    return false;
  }
  handleChange = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  // response when user clicks on notification icon

  // response when user clicks on setting icon
  handleSettingClick() {}

  render() {
    const userInfo = new UserInfo();
    const alert = " 🔔 ";
    const setting = " ⚙️ ";

    return (
      <>
        <Nav
          variant='pills'
          defaultActiveKey='home'
          className='justify-content-end'
        >
          <Nav.Item>
            <Nav.Link eventKey='home' href='/'>
              My Calendars
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='alert' onSelect={this.handleChange}>
              {alert}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='logout'
              href='/start'
              onSelect={() => userInfo.logout()}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='settings' title='Item'>
              {setting}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <GroupInvites
          show={false}
          handleClose={this.handleClose}
          handleShow={this.handleChange}
        />
      </>
    );
  }
}
export default NavBar;
