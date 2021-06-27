import { Component } from "react";
import classes from "../../../styles/groups/icon.module.css";
class Icon extends Component {
  render() {
    return (
      <div
        className={classes.icon}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.name}
      </div>
    );
  }
}
export default Icon;
