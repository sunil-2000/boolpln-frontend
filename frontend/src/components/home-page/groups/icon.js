import { Component } from "react";
import classes from "../../../styles/groups/icon.module.css";
class Icon extends Component {
  render() {
    return (
      <div
        className={classes.icon}
        style={{ "background-color": this.props.color }}
      ></div>
    );
  }
}
export default Icon;
