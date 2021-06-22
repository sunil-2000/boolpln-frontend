import React, { Component } from "react";
import Panel from "./sign-up-panel.js";
import classes from "../../styles/signup-page/sign-up-page.module.css";

class SignUp extends Component {
  render() {
    return (
      <div class={classes.page}>
        <Panel />
      </div>
    );
  }
}

export default SignUp;
