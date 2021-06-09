import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Week from "./components/calendar/week.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Week} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
