import React, { Component } from "react";
import Groups from "../groups/groups.js";
import Week from "../calendar/week.js";
import classes from "../../styles/home-page/home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={classes.page}>
        <Groups />
        <Week />
      </div>
    );
  }
}

export default Home;
