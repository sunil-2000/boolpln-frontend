import React from "react";
import Time from "./time";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: Array(13).fill(""),
      value: this.props.value,
      end: false,
    };
  }

  renderTimeSlot(i, y) {
    let on = this.state.days[i] !== "" ? true : false;
    return (
      <Time
        fillColor={this.state.days[i]}
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
    let timeSlots = this.state.days.slice();

    if (timeSlots[i] === "") {
      timeSlots[i] = "black";
    } else {
      timeSlots[i] = "";
    }

    this.setState({ days: timeSlots });
  }
  // renderDay returns a column with hoursNo number of time slots
  renderDay(hoursNo) {
    let timeLst = [];
    for (let x = 0; x < 24; x++) {
      timeLst.push(this.renderTimeSlot(x, this.props.hour));
    }
    return timeLst;
  }
  render() {
    const dayTagStyle = {
      border: "1px solid #C4C4C4",
      borderRight: "none",
      height: "4em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "2em",
      fontFamily: "Arial",
      color: "#989898",
      paddingBottom: "0.5em",
    };
    const dayTagSunStyle = {
      border: "1px solid #C4C4C4",
      height: "4em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "2em",
      fontFamily: "Arial",
      color: "#989898",
      paddingBottom: "0.5em",
    };
    function handleBorderOverlap(end) {
      if (end) return dayTagSunStyle;
      else return dayTagStyle;
    }
    return (
      <div className='day-container'>
        <div style={handleBorderOverlap(this.props.end)} className='day-tag'>
          <div className='date-num'>{this.props.date}</div>
          <div>{this.props.value}</div>
        </div>
        <div className='day-column'>
          {this.renderDay(this.props.hours)}
          {/* allow switch for am/pm, and eventually allow arg for renderDay to be derived from props*/}
        </div>
      </div>
    );
  }
}

export default Day;
