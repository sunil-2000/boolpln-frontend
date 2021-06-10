import { useHistory } from "react-router-dom";

const Panel = () => {
  const panelStyle = {
    backgroundColor: "#C4C4C4",
    height: "30em",
    width: "30em",
    borderRadius: "2em",
  };
  const titleStyle = {
    color: "white",
    fontSize: "4em",
    textAlign: "center",
    marginTop: "1em",
  };
  const signUpStyle = {
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
  const logInStyle = {
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
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2em",
  };
  const history = useHistory();
  function changePage(path) {
    history.push(path);
  }
  return (
    <div style={panelStyle}>
      <h1 style={titleStyle}>Scheduler</h1>
      <div style={columnStyle}>
        <button style={signUpStyle} onClick={() => changePage("signup")}>
          Sign Up
        </button>
        <button style={logInStyle} onClick={() => changePage("login")}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Panel;
