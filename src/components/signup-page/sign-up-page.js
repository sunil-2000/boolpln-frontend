import React, { Component } from "react";
import Panel from "./sign-up-panel.js";
import classes from "../../styles/signup-page/sign-up-page.module.css";
import { connect } from "react-redux";
import { getLoggedIn } from "../../redux/reducers/userApiReducer.js";
import { Redirect } from "react-router";

class SignUp extends Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className={classes.page}>
        <Panel />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: getLoggedIn(state),
  };
};

export default connect(mapStateToProps)(SignUp);
