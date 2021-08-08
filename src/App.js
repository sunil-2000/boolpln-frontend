import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home-page/home.js";
import Start from "./components/start-page/start-page.js";
import SignUp from "./components/signup-page/sign-up-page.js";
import LogIn from "./components/login-page/log-in-page.js";
import GroupInvites from "./components/home-page/top-bar/group-invites.js";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import { connect } from "react-redux";
import { getGroupError } from "./redux/reducers/groupApiReducer.js";
import { getCalError } from "./redux/reducers/calendarReducer.js";
import { getUserError } from "./redux/reducers/userApiReducer.js";
import { clearError } from "./redux/actions/general.js";

const errorMapping = {
  groupError: "Group Error!",
  userError: "User Error!",
  calError: "Calendar Error",
};

class App extends Component {
  componentDidUpdate(prevProps) {
    const currProps = ["userError", "groupError", "calError"];
    const newErrors = currProps.filter(
      (errorType) =>
        this.props[errorType] !== prevProps[errorType] &&
        this.props[errorType] !== null
    );

    if (newErrors.length > 0) {
      newErrors.forEach((error) => {
        let errormsg = "";
        if (typeof this.props[error].data === "string") {
          errormsg = this.props[error].data;
        } else {
          errormsg = "sorry something went wrong";
        }

        store.addNotification({
          title: errorMapping[error],
          message: errormsg,
          type: "danger",
          insert: "top",
          container: "top-left",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true,
          },
        });
      });
      // dispatch action to clear error field (clear after displaying to user)
      this.props.clearError();
    }
  }
  render() {
    return (
      <>
        <ReactNotification></ReactNotification>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/test" component={GroupInvites} />
              <Route path="/" component={Home} exact />
              <Route path="/start" component={Start} />
              <Route path="/login" component={LogIn} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calError: getCalError(state),
    groupError: getGroupError(state),
    userError: getUserError(state),
  };
};

export default connect(mapStateToProps, { clearError })(App);
