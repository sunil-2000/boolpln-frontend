import React from "react";
import Time from "./time";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { connect } from "react-redux";
import { addDay } from "../../../redux/actions/dayActions";

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
  }

  // function that  renders a single timeslot on each day
  renderTimeSlot(i) {
    let on = this.state.times[i] !== "" ? true : false; // whether the timeslot is "on"

    // the key should be able to be just i (debug only then)
    return (
      <Time
        fillColor={this.state.times[i]}
        selected={on}
        onClick={() => this.handleClick(i)}
        key={
          this.props.month +
          "/" +
          this.props.date +
          "/" +
          this.props.year +
          ", " +
          i +
          ", " +
          on
        }
      />
    );
  }

  // function that handles a click on a time slot
  handleClick(i) {
    let timeSlots = this.state.times.slice(); // create  a shallow copy of the array of time slots
    let userTimes = this.state.userTimes.slice();
    // if slot has been selected, mark as deselected, otherwise do opposite
    if (timeSlots[i] === "") {
      timeSlots[i] = "green";
      userTimes[i] = true;
    } else {
      timeSlots[i] = "";
      userTimes[i] = false;
    }

    this.setState({ times: timeSlots, userTimes: userTimes }); // set day's state
    this.props.addDay(this.state.date, userTimes);
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

  // when component mounts, call redux action to save state
  componentDidMount() {
    this.props.addDay(this.state.date, this.state.userTimes);
  }

  // function for assigning special css. Is this necessary, and if so, should it be moved outside?
  handleBorderOverlap(end) {
    if (end) return "day-tag-sun";
    else return "day-tag";
  }

  // actually renders the page
  render() {
    return (
      <div className='day-container'>
        <div className={this.handleBorderOverlap(this.props.end)}>
          <div className='date-num'>{this.props.date}</div>
          <div className='date-name'>{this.props.value}</div>
        </div>
        <div className='day-column'>
          {this.renderDay()}
          {/* allow switch for am/pm, and eventually allow arg for renderDay to be derived from props*/}
        </div>
      </div>
    );
  }
}

export default connect(null, { addDay })(Day); // attach redux action to day as a prop
