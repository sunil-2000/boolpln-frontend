import React, { Component } from "react";
import Panel from "./start-panel.js";
import classes from "../../styles/start-page/start-page.module.css";
import { connect } from "react-redux";
import { getLoggedIn } from "../../redux/reducers/userApiReducer.js";
import { Redirect } from "react-router";

// class wrapper for start page
class Start extends Component {
  // renders in the login panels
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

export default connect(mapStateToProps)(Start);
