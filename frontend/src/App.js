import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home-page/home.js";
import Start from "./components/start-page/start-page.js";
import SignUp from "./components/signup-page/sign-up-page.js";
import LogIn from "./components/login-page/log-in-page.js";
import GroupInvites from "./components/home-page/top-bar/group-invites.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: window.token,
    };
  }

  render() {
    return (
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
    );
  }
}

export default App;
