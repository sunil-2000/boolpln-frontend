import { useHistory } from "react-router-dom";
import { useState } from "react";
import { slideInDown } from "react-animations";
import styled, { keyframes } from "styled-components";
import Refresh from "../../security/refresh.js";
import classes from "../../styles/login-page/log-in-panel.module.css";

const Tada = styled.div`
  animation: 2s ${keyframes`${slideInDown}`};
`;

// signup panel
const Panel = () => {
  const refresh = new Refresh(); // refresh obj for Panel

  // history tracker
  const history = useHistory();
  function goBack(path) {
    history.push(path);
  }

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
    let result = await refresh.login(username, password); // actually sends request, gets result
    console.log("loginHelper:" + result); // prints result for testing
  }

  // actual html structure of login panel
  return (
    <Tada className={classes.panel}>
      <h1 className={classes.title}>Log In</h1>
      <div className={classes.column}>
        <form className={classes.form} onSubmit={loginHelper}>
          <label className={classes.formLabel}>
            Username
            <input
              className={classes.formInput}
              type='text'
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label className={classes.formLabel}>
            Password
            <input
              className={classes.formInput}
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <input className={classes.submit} type='submit' value='Log In' />
        </form>
        <button className={classes.goBack} onClick={() => goBack("start")}>
          Back
        </button>
      </div>
    </Tada>
  );
};

export default Panel;
