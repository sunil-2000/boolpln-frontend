import React from "react";
import Time from "./time";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { connect } from "react-redux";
import { getGroupDayList } from "../../../redux/reducers/calendarReducer";
import Col from "react-bootstrap/Col";
import classes from "../../../styles/home-page/home.module.css";

// class which represents each dat in the calendar
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: Array(24).fill(""), // array whose entries represent which hour was selected
      value: this.props.value, // the day of the week
      end: this.props.end, // indicator for last of the 7 days displayed. Is it necessary?
      date: this.props.full_date, // full date of the day
      userTimes: Array(24).fill(false),
    };
    this.renderTimeSlot = this.renderTimeSlot.bind(this);
  }

  // function that  renders a single timeslot on each day
  renderTimeSlot(i) {
    let fillColor = "";
    let data = [];
    const week = [...this.props.week];
    if (week.length > 0) {
      const day = week[this.props.index];
      if (day.length > 0) {
        fillColor = day[i] !== null ? "green" : "";
        data = day[i];
      }
    }
    // the key should be able to be just i (debug only then)
    return (
      <Time
        fillColor={fillColor}
        onClick={() => this.handleClick(i)}
        key={
          this.props.month +
          "/" +
          this.props.date +
          "/" +
          this.props.year +
          ", " +
          i
        }
        dayIndex={this.props.index}
        timeIndex={i}
        data={data}
        selected={this.state.userTimes[i]}
      />
    );
  }

  // renders 24 timeslots as a day
  renderDay() {
    // load a list of 24 timeslots
    let timeLst = [];
    for (let x = 0; x < 24; x++) {
      timeLst.push(this.renderTimeSlot(x));
    }

    return timeLst; // return list
  }

  // function for assigning special css. Is this necessary, and if so, should it be moved outside?
  handleBorderOverlap(end) {
    if (end) return "day-tag-sun";
    else return "day-tag";
  }

  // actually renders the page
  render() {
    return (
      <Col className={classes.noPadding}>
        <div className="day-container">
          <div className={this.handleBorderOverlap(this.props.end)}>
            <div className="date-num">{this.props.date}</div>
            <div className="date-name">{this.props.value}</div>
          </div>
          <div className="day-column">
            {this.renderDay()}
            {/* allow switch for am/pm, and eventually allow arg for renderDay to be derived from props*/}
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    week: getGroupDayList(state),
  };
};

export default connect(mapStateToProps)(Day); // attach redux action to day as a prop
