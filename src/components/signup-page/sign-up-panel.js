import { useHistory } from "react-router-dom";
import { useState } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import classes from "../../styles/signup-page/sign-up-panel.module.css";
import createUser from "../../redux/middleware/user/createUser";
import { connect } from "react-redux";

const Tada = styled.div`
  animation: 2s ${keyframes`${slideInUp}`};
`;

const Panel = (props) => {
  // history tracker
  const history = useHistory();
  function goBack(path) {
    history.push(path);
  }

  // hooks for setting first name, last name, email, username, and password
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  // helper called when signup form is submitted
  async function signUpHelper(event) {
    event.preventDefault(); // very important else form autosubmits
    props.createUser(firstName, lastName, email, username, password);
    console.log("signUpHelper:"); // prints result for testing
  }

  // actual html structure of signup panel
  return (
    <Tada className={classes.panel}>
      <h1 className={classes.title}>Sign Up</h1>
      <div className={classes.column}>
        <form className={classes.form} onSubmit={signUpHelper}>
          <div className={classes.row}>
            <label className={classes.formLabel}>
              First Name
              <input
                className={classes.formInput}
                type="text"
                value={firstName}
                onChange={firstNameChange}
                required="required"
              />
            </label>
            <label className={classes.formLabel}>
              Last Name
              <input
                className={classes.formInput}
                type="text"
                value={lastName}
                onChange={lastNameChange}
                required="required"
              />
            </label>
          </div>
          <div className={classes.row}>
            <label className={classes.formLabel}>
              Email
              <input
                className={classes.formInput}
                type="email"
                value={email}
                onChange={handleEmailChange}
                required="required"
              />
            </label>
            <label className={classes.formLabel}>
              Username
              <input
                className={classes.formInput}
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required="required"
              />
            </label>
          </div>
          <div className={classes.row}>
            <label className={classes.formLabel}>
              Password
              <input
                className={classes.formInput}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required="required"
              />
            </label>
          </div>
          <div className={classes.row}>
            <input className={classes.submit} type="submit" value="Sign Up" />
          </div>
        </form>
        <div className={classes.row}>
          <button className={classes.goBack} onClick={() => goBack("start")}>
            Back
          </button>
        </div>
      </div>
    </Tada>
  );
};

export default connect(null, { createUser })(Panel);
