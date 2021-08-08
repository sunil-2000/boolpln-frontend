import classes from "../../../styles/groups/groups.module.css";
import InviteContainer from "../shared/inviteContainer";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Icon from "./icon.js";
import { connect } from "react-redux";
import {
  getCurrentGroup,
  getGroupList,
} from "../../../redux/reducers/groupApiReducer";
// import "reactjs-popup/dist/index.css";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  renderGroupIcons() {
    const groups = this.props.groups;
    let colors = ["#F3505F", "#C073ED", "#72A4EA"];
    let result = [];
    let i = 0;
    if (groups.length > 0) {
      groups.forEach((group) => {
        result.push(
          <Icon
            color={colors[i % 3]}
            key={group.groupName + ", " + group.groupID}
            name={group.groupName}
            id={group.groupID}
            members={group.groupMembers}
          ></Icon>
        );
        i += 1;
      });
    }
    return result;
  }

  render() {
    return (
      <div className={classes.groupContainer}>
        <h4 className={classes.title}>My Groups</h4>
        <Button
          disabled={!(this.props.groups.length < 3)}
          onClick={() => this.setState({ show: true })}
          className={classes.addButton}
          variant="outline-secondary"
        >
          New
        </Button>
        <InviteContainer
          isCreate={true}
          show={this.state.show}
          handleClose={() => this.setState({ show: false })}
        ></InviteContainer>
        <div className={classes.iconContainer}>{this.renderGroupIcons()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: getGroupList(state),
    currentGroup: getCurrentGroup(state),
  };
};

export default connect(mapStateToProps)(Groups);
