import React from "react";
import Time from "./time";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: Array(13).fill(""),
      value: this.props.value,
    };
  }

  renderTimeSlot(i, y) {
    return (
      <Time
        fillColor={this.state.days[i]}
        onClick={() => this.handleClick(i)}
        key={i.toString() + y}
      />
    );
  }

  handleClick(i) {
    let timeSlots = this.state.days.slice();

    if (timeSlots[i] === "") {
      timeSlots[i] = "black";
    } else {
      timeSlots[i] = "";
    }

    this.setState({ days: timeSlots });
    console.log(this.state.days);
  }
  // renderDay returns a column with hoursNo number of time slots
  renderDay(hoursNo) {
    let timeLst = [];
    for (let x = 0; x < hoursNo; x++) {
      timeLst.push(this.renderTimeSlot(x, this.props.value));
    }
    return timeLst;
  }
  render() {
    return (
      <div className='day-container'>
        <div className='day-tag'>{this.props.value}</div>
        <div className='day-column'>
          {this.renderDay(this.props.hours)}
          {/* allow switch for am/pm, and eventually allow arg for renderDay to be derived from props*/}
        </div>
      </div>
    );
  }
}

export default Day;
