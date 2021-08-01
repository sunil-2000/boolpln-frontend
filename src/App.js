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

class App extends Component {
  componentDidUpdate(prevProps) {
    const currProps = ["userError", "groupError", "calError"];
    const newErrors = currProps.filter(
      (errorType) => props[errorType] !== prevProps[errorType]
    );
    if (newErrors.length > 0) {
      newErrors.forEach((error) => {
        store.addNotification({
          title: "Group error!",
          message: "" + this.props["error"],
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
    }
  }
  render() {
    return (
      <>
        <ReactNotification></ReactNotification>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/test' component={GroupInvites} />
              <Route path='/' component={Home} exact />
              <Route path='/start' component={Start} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={LogIn} />
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

export default connect(mapStateToProps)(App);
