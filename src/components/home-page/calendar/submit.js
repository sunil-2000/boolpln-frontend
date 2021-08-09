import { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "../../../styles/calendar/submit.module.css";
import { connect } from "react-redux";
import {
  getDayList,
  getCalendarGroup,
} from "../../../redux/reducers/calendarReducer";
import { bindActionCreators } from "redux";
import updateCalendar from "../../../redux/middleware/calendar/updateCalendar";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("in click");
    const days = this.props.days;
    const updated = days.map((day) => day.timeSlots);
    console.log(this.props.groupID);
    this.props.updateCalendar(this.props.groupID, updated);

    // move api call to redux getDays function
  }
  render() {
    return (
      <Button
        className={classes.button}
        variant="outline-light"
        size="lg"
        onClick={this.handleClick}
      >
        Submit
      </Button>
    );
  }
}

const mapStatetoProps = (state) => {
  const days = getDayList(state);
  const groupID = getCalendarGroup(state);
  return { days: days, groupID: groupID };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateCalendar: updateCalendar,
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(Submit);
