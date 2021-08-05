import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import NavBar from "./top-bar/nav-bar.js";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getGroups from "../../redux/middleware/groups/getGroups";
import getInvites from "../../redux/middleware/groups/getInvites";
import getUser from "../../redux/middleware/user/getUser.js";
import { getCurrentGroup } from "../../redux/reducers/groupApiReducer.js";
import { getCalendarGroup } from "../../redux/reducers/calendarReducer.js";
import getCalendar from "../../redux/middleware/calendar/getCalendar.js";
import { Redirect } from "react-router";
import { getLoggedIn } from "../../redux/reducers/userApiReducer.js";

class Home extends Component {
  // ReactNotifications element locked in place, any other file can add
  // notifications to this component -> see methods unders local-objects/notifications

  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      groupID: null,
    };
  }

  togglePopup() {
    this.setState({ seen: false });
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      return;
    }

    const date = new Date();
    if (
      this.props.groupApiGroup !== null &&
      this.props.groupApiGroup !== this.state.groupID
    ) {
      this.props.getCalendar(
        this.props.groupApiGroup,
        date.getTimezoneOffset()
      );
    }
  }

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }

    //this.props.getInvites();
    const { getGroups, getInvites, getUser } = this.props;
    getGroups();
    getInvites();
    getUser();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/start" />;
    }

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

function mapStateToProps(state) {
  const groupApiGroup = getCurrentGroup(state);

  return {
    groupApiGroup: groupApiGroup ? groupApiGroup.groupID : null,
    loggedIn: getLoggedIn(state),
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getGroups: getGroups,
      getInvites: getInvites,
      getCalendar: getCalendar,
      getUser: getUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
