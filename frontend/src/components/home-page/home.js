import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import NavBar from "./top-bar/nav-bar.js";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getGroups from "../../redux/middleware/groups/getGroups";
import getInvites from "../../redux/middleware/groups/getInvites";

import {
  groupError,
  groupPending,
  getGroupsSuccess,
  getInvitesSuccess,
} from "../../redux/actions/groupApiActions.js";

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
    console.log(this.props);
  }

  componentDidMount() {
    //this.props.getInvites();
    const { getGroups, getInvites } = this.props;
    getGroups();
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

const mapStatetoProps = (state) => ({
  error: groupError(state),
  groups: getGroupsSuccess(state),
  pending: groupPending(state),
  invites: getInvitesSuccess(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getGroups: getGroups,
      getInvites: getInvites,
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
