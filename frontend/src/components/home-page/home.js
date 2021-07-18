import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import NavBar from "./top-bar/nav-bar.js";
import { Component } from "react";
import { connect } from "react-redux";
import getGroups from "../../redux/middleware/getGroups.js";

class Home extends Component {
  // ReactNotifications element locked in place, any other file can add
  // notifications to this component -> see methods unders local-objects/notifications

  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };

    this.renderCal = this.renderCal.bind(this);
  }

  togglePopup() {
    this.setState({ seen: false });
  }

  renderCal() {
    if (this.props.groups.length === 0) {
      return null;
    } else {
      console.log(this.props.groups);
      const groupId = this.props.groups[0].groupId;
      return <Week groups={groupId}></Week>;
    }
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

const mapStatetoProps = (state) => {
  const groups = getGroups(state);
  return { groups: groups };
};

export default connect(mapStatetoProps)(Home);
