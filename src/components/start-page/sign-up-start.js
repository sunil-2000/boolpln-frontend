import React, { Component } from "react";
import classes from "../../styles/start-page/start-page.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import createUser from "../../redux/middleware/user/createUser";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { userError } from "../../redux/actions/userApiActions";
import ReCAPTCHA from "react-google-recaptcha";
import { GET_CALENDAR_SUCCESS } from "../../redux/types";

const SignUp = (props) => {
  // hooks for setting first name, last name, email, username, and password
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState(false);

  // functions that use hooks to change their respective js variables from above
  function firstNameChange(event) {
    setFirstName(event.target.value);
  }
  function lastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleCaptchaStatus(status) {
    setCaptchaStatus(status);
  }

  // helper called when signup form is submitted
  async function signUpHelper(event) {
    event.preventDefault(); // very important else form autosubmits
    if (captchaStatus) {
      props.createUser(firstName, lastName, email, username, password);
    } else {
      props.userError({ data: "Please submit the captcha." });
    }
  }

  return (
    <form onSubmit={signUpHelper}>
      <h3>Register</h3>
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={firstNameChange}
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={lastNameChange}
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required="required"
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
          required="required"
        />
      </div>

      <button type="submit" className="btn btn-light btn-lg btn-block">
        Register
      </button>

      <div className={classes.captcha}>
        <ReCAPTCHA
          sitekey="6LdFSe4bAAAAAL4EbsGGnJYRfU_SL9xvbXuSrFqX"
          onChange={handleCaptchaStatus}
          theme="dark"
        />
      </div>

      <p className={classes.forgotPassword}>
        Already registered? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
};

export default connect(null, { createUser, userError })(SignUp);
