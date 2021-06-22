import React, { Component } from "react";
import Panel from "./start-panel.js";
import classes from "../../styles/start-page/start-page.module.css";

class Start extends Component {
  render() {
    return (
      <div className={classes.page}>
        <Panel />
      </div>
    );
  }
}

export default Start;
