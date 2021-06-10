import { useHistory } from "react-router-dom";
import { useState } from "react";
import { slideInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const Tada = styled.div`
  animation: 2s ${keyframes`${slideInDown}`};
`;

const Panel = () => {
  const panelStyle = {
    backgroundColor: "#C4C4C4",
    height: "45em",
    width: "30em",
    borderRadius: "2em",
  };
  const titleStyle = {
    color: "white",
    fontSize: "4em",
    textAlign: "center",
    marginTop: "1em",
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
  };
  const submitStyle = {
    backgroundColor: "#717171",
    border: "none",
    color: "white",
    fontSize: "2.5em",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    marginLeft: "2.5em",
    marginRight: "2.5em",
    borderRadius: "0.5em",
    fontFamily: "'Open Sans', sans-serif",
  };
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  };
  const formLabelStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "2em",
    marginBottom: "1em",
  };
  const formInputStyle = {
    marginLeft: "1em",
    marginTop: "0.5em",
    width: "85%",
    height: "3em",
    borderRadius: "2em",
    border: "none",
    outline: "none",
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center",
    fontSize: "0.5em",
  };
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
    console.log("username: " + username);
    console.log("password: " + password);
    event.preventDefault();
  }
  return (
    <Tada>
      <div style={panelStyle}>
        <h1 style={titleStyle}>Log In</h1>
        <div style={columnStyle}>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <label style={formLabelStyle}>
              Username
              <input
                style={formInputStyle}
                type='text'
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
            <label style={formLabelStyle}>
              Password
              <input
                style={formInputStyle}
                type='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <input style={submitStyle} type='submit' value='Log In' />
          </form>
          <button style={goBackStyle} onClick={() => goBack("start")}>
            Go Back
          </button>
        </div>
      </div>
    </Tada>
  );
};

export default Panel;
