import { useHistory } from "react-router-dom";
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";
import classes from "../../styles/start-page/start-panel.module.css";

const Tada = styled.div`
  animation: 2s ${keyframes`${tada}`};
`;

// startup panel
const Panel = () => {
  // history tracker
  const history = useHistory();
  function changePage(path) {
    history.push(path);
  }

  // actual html
  return (
    <Tada className={classes.panel}>
      <h1 className={classes.title}>Scheduler</h1>
      <div className={classes.column}>
        <button className={classes.signUp} onClick={() => changePage("signup")}>
          Sign Up
        </button>
        <button className={classes.logIn} onClick={() => changePage("login")}>
          Log In
        </button>
      </div>
    </Tada>
  );
};

export default Panel;
