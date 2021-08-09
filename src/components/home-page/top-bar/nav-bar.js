import { Component } from "react";
import GroupInvites from "./group-invites";
import Settings from "./settings";
import React from "react";
import { logout } from "../../../redux/actions/userApiActions.js";
import { connect } from "react-redux";
import classes from "../../../styles/home-page/home.module.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Popover,
  PopoverContent,
} from "react-bootstrap";
import RenameGroup from "../calendar/renameGroup.js";
import LeaveGroup from "../calendar/leaveGroups.js";
import InviteContainer from "../shared/inviteContainer.js";

import { getCurrentGroup } from "../../../redux/reducers/groupApiReducer.js";
import { getFirstName } from "../../../redux/reducers/userApiReducer";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      settings: false,
      activeKey: "home",
      // activeKey does not currently work, should reset
      // ui selector on bell after closing from pop up modal (small issue)
      showRename: false,
      showLeave: false,
      showInvite: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  // handleClose used for notification popup close action
  async handleClose() {
    await this.setState({ show: false, activeKey: "" });
  }

  handleMemberList() {
    const currentGroup = this.props.currentGroup;
    let result = [];
    if (currentGroup) {
      let members = currentGroup.groupMembers;
      let membersCleaned = members.map((member) => member.username);
      membersCleaned.forEach((member) => {
        result.push(<div key={member}>{"@" + member}</div>);
      });
    }
    return result;
  }

  handleGroupName() {
    const currentGroup = this.props.currentGroup;
    let result = { groupName: "" };
    if (currentGroup) {
      result.groupName = currentGroup.groupName;
    }
    return result.groupName;
  }

  handleSelect(eventKey) {
    console.log(`selected ${eventKey}`);
    if (eventKey === "rename") {
      this.setState({ showRename: true });
    } else if (eventKey === "invite") {
      this.setState({ showInvite: true });
    } else if (eventKey === "leave") {
      this.setState({ showLeave: true });
    }
  }

  render() {
    const alert = " 🔔 ";
    const setting = " ⚙️ ";

    return (
      <>
        <Nav
          variant="pills"
          defaultActiveKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <Navbar.Text className={classes.greeting}>
            {"Hi, " + this.props.firstName + "!"}
          </Navbar.Text>
          <div className={classes.buttonsBlock}>
            <NavDropdown
              title={this.handleGroupName()}
              id="nav-dropdown"
              className={classes.dropDown}
            >
              <NavDropdown.Item eventKey="invite">Invite ✉️</NavDropdown.Item>
              <InviteContainer
                isCreate={false}
                show={this.state.showInvite}
                handleClose={() => this.setState({ showInvite: false })}
              ></InviteContainer>
              <NavDropdown.Item eventKey="rename">Rename ✍</NavDropdown.Item>
              <RenameGroup
                show={this.state.showRename}
                handleClose={() => this.setState({ showRename: false })}
              ></RenameGroup>
              <NavDropdown.Item eventKey="leave">Leave ✌</NavDropdown.Item>
              <LeaveGroup
                show={this.state.showLeave}
                handleClose={() => this.setState({ showLeave: false })}
              ></LeaveGroup>
              <NavDropdown.Divider />
              <OverlayTrigger
                placement="right"
                trigger={["hover", "focus"]}
                overlay={
                  <Popover>
                    <Popover.Title as="h3">
                      <strong>Members</strong>
                    </Popover.Title>
                    <PopoverContent>{this.handleMemberList()}</PopoverContent>
                  </Popover>
                }
              >
                <NavDropdown.Item eventKey="members">
                  Members 👥
                </NavDropdown.Item>
              </OverlayTrigger>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                eventKey="home"
                href="/"
                className={classes.calendarButton}
              >
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
                onSelect={() => this.props.logout()}
                className={classes.logoutButton}
              >
                Log Out
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
          </div>
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

const mapStateToProps = (state) => {
  return {
    currentGroup: getCurrentGroup(state),
    firstName: getFirstName(state),
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
