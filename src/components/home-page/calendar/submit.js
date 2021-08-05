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
import { clearCalendar } from "../../../redux/actions/calendarActions";
class Submit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.groupID);
    console.log(this.props.days);
    this.props.updateCalendar(this.props.groupID, this.props.days);
    this.props.clearCalendar();
    // move api call to redux getDays function
  }
  render() {
    return (
      <Button
        className={classes.button}
        variant='primary'
        size='lg'
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
      clearCalendar: clearCalendar,
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(Submit);
