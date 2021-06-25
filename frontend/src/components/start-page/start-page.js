import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Panel from "./start-panel.js";
import classes from "../../styles/start-page/start-page.module.css";
import Credentials from "../../flow/security/credentials.js";

// class wrapper for start page
class Start extends Component {
  // constructor
  constructor(props) {
    super(props); // call super

    // set credentials state to false
    this.state = {
      credentials: false,
    };
  }

  // auto-called on mount to DOM
  async componentDidMount() {
    // check credentials
    const credentials = new Credentials();
    const result = await credentials.checkCredentials();

    // set state based on success
    this.setState({
      credentials: result,
    });
  }

  // renders in the login panels
  render() {
    // redirect if has valid credential
    if (this.state.credentials) {
      return <Redirect to='/' />;
    }

    return (
      <div className={classes.page}>
        <Panel />
      </div>
    );
  }
}

export default Start;
