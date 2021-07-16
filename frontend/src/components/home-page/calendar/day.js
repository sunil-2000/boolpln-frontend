import React from "react";
import Time from "./time";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { connect } from "react-redux";
import { addDay } from "../../../redux/actions/dayActions";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: Array(23).fill(""),
      value: this.props.value,
      end: this.props.end,
      date: this.props.full_date,
    };
  }

  renderTimeSlot(i) {
    let on = this.state.times[i] !== "" ? true : false;
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

  handleClick(i) {
    console.log("event clicked", this.state.times[i]);
    let timeSlots = this.state.times.slice();

    if (timeSlots[i] === "") {
      timeSlots[i] = "green";
    } else {
      timeSlots[i] = "";
    }
    // add call to update store
    this.setState({ times: timeSlots });
  }
  // renderDay returns a column with hoursNo number of time slots
  renderDay() {
    console.log(
      this.state.times + ", " + this.state.value + ", " + this.state.date
    );
    let timeLst = [];
    for (let x = 0; x < 24; x++) {
      timeLst.push(this.renderTimeSlot(x));
    }
    return timeLst;
  }
  render() {
    function handleBorderOverlap(end) {
      if (end) return "day-tag-sun";
      else return "day-tag";
    }
    this.props.addDay(this.state.date, this.state.times);
    return (
      <div className='day-container'>
        <div className={handleBorderOverlap(this.props.end)}>
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

export default connect(null, { addDay })(Day);
