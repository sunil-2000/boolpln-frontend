import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import ReactNotifications from "react-notifications-component";
import NavBar from "./top-bar/nav-bar.js";
import { Component } from "react";

class Home extends Component {
  // ReactNotifications element locked in place, any other file can add
  // notifications to this component -> see methods unders local-objects/notifications

  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      listGroups: [],
    };
  }

  setListGroups() {
    this.setState([]);
  }

  togglePopup() {
    this.setState({ seen: false });
  }

  render() {
    return (
      <div className={classes.page}>
        <div className={classes.nav}>
          <NavBar />
        </div>
        <div className={classes.calendar}>
          <Groups />

          <Week />
        </div>
      </div>
    );
  }
}

export default Home;
