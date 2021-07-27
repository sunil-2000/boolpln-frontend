import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import NavBar from "./top-bar/nav-bar.js";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getGroups from "../../redux/middleware/groups/getGroups";
import getInvites from "../../redux/middleware/groups/getInvites";
import { getCurrentGroup } from "../../redux/reducers/groupApiReducer.js";
import { getCalendarGroup } from "../../redux/reducers/calendarReducer.js";
import getCalendar from "../../redux/middleware/calendar/getCalendar.js";

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
    const date = new Date();
    if (
      (this.props.groupApiGroup && !this.props.calGroup) ||
      this.props.calGroup !== this.props.groupApiGroup
    )
      getCalendar(this.props.groupApiGroup, date.getTimezoneOffset());
  }

  componentDidMount() {
    //this.props.getInvites();
    const { getGroups, getInvites } = this.props;
    getGroups();
    getInvites();
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

function mapStateToProps(state) {
  const groupApiGroup = getCurrentGroup(state);
  const calGroup = getCalendarGroup(state);

  return {
    groupApiGroup: groupApiGroup ? groupApiGroup.groupID : null,
    calGroup: calGroup ? calGroup.groupID : null,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getGroups: getGroups,
      getInvites: getInvites,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
