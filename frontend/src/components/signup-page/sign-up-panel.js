import { useHistory } from "react-router-dom";
import { useState } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const Tada = styled.div`
  animation: 2s ${keyframes`${slideInUp}`};
`;

const Panel = () => {
  const panelStyle = {
    backgroundColor: "#C4C4C4",
    height: "44em",
    width: "55em",
    borderRadius: "2em",
  };
  const titleStyle = {
    color: "white",
    fontSize: "4em",
    textAlign: "center",
    marginBottom: "0.5em",
  };
  const goBackStyle = {
    backgroundColor: "#9A9A9A",
    border: "none",
    color: "white",
    fontSize: "2.5em",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    marginLeft: "2.5em",
    marginRight: "2.5em",
    borderRadius: "0.5em",
    fontFamily: "'Open Sans', sans-serif",
    width: "40%",
  };
  const submitStyle = {
    backgroundColor: "#717171",
    border: "none",
    color: "white",
    fontSize: "2.5em",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    marginTop: "0.5em",
    marginLeft: "2.5em",
    marginRight: "2.5em",
    borderRadius: "0.5em",
    fontFamily: "'Open Sans', sans-serif",
    width: "40%",
  };
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
    paddingLeft: "2.5em",
    paddingRight: "2.5em",
  };
  const formLabelStyle = {
    display: "inline-block",
    textAlign: "center",
    color: "white",
    fontSize: "2em",
    marginBottom: "0.25em",
    width: "50%",
  };
  const formInputStyle = {
    height: "3em",
    width: "100%",
    borderRadius: "2em",
    border: "none",
    outline: "none",
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center",
    fontSize: "0.5em",
    marginTop: "0.25em",
  };
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2em",
  };
  const history = useHistory();
  function goBack(path) {
    history.push(path);
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  function handleSubmit(event) {
    console.log("first name: " + firstName);
    console.log("last name: " + lastName);
    console.log("email: " + email);
    console.log("username: " + username);
    console.log("password: " + password);
    event.preventDefault();
    axios({
      method: "post",
      url: "/api/users/",
      data: {
        username: username,
        email: email,
        password: password,
      },
    }).catch(handleSignupError);
  }
  function handleSignupError(error) {
    console.log(error.response.status);
  }

  return (
    <Tada style={panelStyle}>
      <h1 style={titleStyle}>Sign Up</h1>
      <div style={columnStyle}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <div style={rowStyle}>
            <label style={formLabelStyle}>
              First Name
              <input
                style={formInputStyle}
                type="text"
                value={firstName}
                onChange={firstNameChange}
                required="required"
              />
            </label>
            <label style={formLabelStyle}>
              Last Name
              <input
                style={formInputStyle}
                type="text"
                value={lastName}
                onChange={lastNameChange}
                required="required"
              />
            </label>
          </div>
          <div style={rowStyle}>
            <label style={formLabelStyle}>
              Email
              <input
                style={formInputStyle}
                type="email"
                value={email}
                onChange={handleEmailChange}
                required="required"
              />
            </label>
            <label style={formLabelStyle}>
              Username
              <input
                style={formInputStyle}
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required="required"
              />
            </label>
          </div>
          <div style={rowStyle}>
            <label style={formLabelStyle}>
              Password
              <input
                style={formInputStyle}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required="required"
              />
            </label>
          </div>
          <div style={rowStyle}>
            <input style={submitStyle} type="submit" value="Sign Up" />
          </div>
        </form>
        <div style={rowStyle}>
          <button style={goBackStyle} onClick={() => goBack("start")}>
            Back
          </button>
        </div>
      </div>
    </Tada>
  );
};

export default Panel;
