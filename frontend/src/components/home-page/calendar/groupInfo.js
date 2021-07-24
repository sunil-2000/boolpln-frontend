import { Component } from "react";
import {
  Button,
  OverlayTrigger,
  Popover,
  PopoverContent,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getCurrentGroup } from "../../../redux/reducers/groupApiReducer.js";
import classes from "../../../styles/calendar/groupInfo.module.css";
import RenameGroup from "./renameGroup.js";

class GroupInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRename: false,
    };
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
    return <h1 className={classes.groupName}>{result.groupName}</h1>;
  }

  render() {
    return (
      <>
        {this.handleGroupName()}
        <OverlayTrigger
          placement='right'
          trigger='click'
          overlay={
            <Popover>
              <Popover.Title as='h3'>
                <strong>Members</strong>
              </Popover.Title>
              <PopoverContent>{this.handleMemberList()}</PopoverContent>
            </Popover>
          }
        >
          <Button className={classes.button} variant='success'>
            Group Members
          </Button>
        </OverlayTrigger>
        <Button
          onClick={() => this.setState({ showRename: true })}
          className={classes.button}
        >
          Rename Group
        </Button>
        <RenameGroup
          show={this.state.showRename}
          handleClose={() => this.setState({ showRename: false })}
        ></RenameGroup>
        <Button className={classes.button}>Leave Group</Button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: getCurrentGroup(state),
  };
};

export default connect(mapStateToProps)(GroupInfo);
