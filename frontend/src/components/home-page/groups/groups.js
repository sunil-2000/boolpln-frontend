import classes from "../../../styles/groups/groups.module.css";
import GroupPopUp from "./group-pop-up.js";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Icon from "./icon.js";
// import "reactjs-popup/dist/index.css";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listGroups: [],
      groups: [],
      groupNo: 2, // limit to 3 groups for beta
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.created = this.created.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

  created(users) {
    let groups = this.state.groups.slice();
    groups.push(users);
    this.setState({
      groupNo: this.state.groupNo + 1,
      groups: users,
    });
  }

  renderGroupIcons() {
    // blue(1) purple(2) pink(3)
    let colors = ["blue", "purple", "pink"];
    let result = [];
    for (let i = 0; i < this.state.groupNo; i++) {
      result.push(<Icon color={colors[i]}></Icon>);
    }
    return result;
  }

  render() {
    console.log(this.state.groupNo > 3);
    return (
      <div className={classes.groupContainer}>
        <h4 className={classes.title}>My Groups</h4>
        <Button disabled={!(this.state.groupNo < 3)} onClick={this.handleShow}>
          Create Group
        </Button>
        <GroupPopUp
          created={this.created}
          show={this.state.show}
          handleClose={this.handleClose}
        ></GroupPopUp>
        <div className={classes.iconContainer}>{this.renderGroupIcons()}</div>
      </div>
    );
  }
}

export default Groups;
