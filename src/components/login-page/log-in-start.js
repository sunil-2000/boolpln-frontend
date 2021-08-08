import React, { Component } from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import classes from "../../styles/start-page/start-page.module.css";
import login from "../../redux/middleware/user/login.js";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState(""); // hook for setting username
  const [password, setPassword] = useState(""); // hook for setting password

  // uses hook to change username on edit
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  // uses hook to change password on edit
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // helper called when login form is submitted
  async function loginHelper(event) {
    event.preventDefault(); // very important else form autosubmits
    props.login(username, password);
    console.log("loginHelper:"); // prints result for testing
  }

  return (
    <form onSubmit={loginHelper}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit" className="btn btn-light btn-lg btn-block">
        Sign in
      </button>
      <p className={classes.forgotPassword}>
        Not registered? <Link to="/start">Register now</Link>
      </p>
    </form>
  );
};

export default connect(null, { login })(Login);
