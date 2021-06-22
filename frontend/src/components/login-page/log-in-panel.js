import { useHistory } from "react-router-dom";
import { useState } from "react";
import { slideInDown } from "react-animations";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Refresh from "../../security/refresh.js";
import classes from "../../styles/login-page/log-in-panel.module.css";

const Tada = styled.div`
  animation: 2s ${keyframes`${slideInDown}`};
`;

const Panel = () => {
  //var refreshAccess = new Refresh();
  const history = useHistory();

  function goBack(path) {
    history.push(path);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "post",
      url: "/api/token-auth/",
      data: {
        username: username,
        password: password,
      },
    })
      .then(handleSuccess)
      .catch(handleSignupError);
  }

  function handleSuccess(response) {
    console.log("in handle success");
    console.log(window.token);
    window.token = response.data.token;
    console.log("token" + window.token);
  }

  function handleSignupError(error) {
    console.log("error: " + error.response);
    console.log(error.response.statusText);
    console.log(error.response.status);
  }

  return (
    <Tada className={classes.panel}>
      <h1 className={classes.title}>Log In</h1>
      <div className={classes.column}>
        <form className={classes.form} onSubmit={handleSubmit}>
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
