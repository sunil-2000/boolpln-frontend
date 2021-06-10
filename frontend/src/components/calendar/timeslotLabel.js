import React from "react";

class TimeslotLabel extends React.Component {
  render() {
    const timeStyle = {
      color: "#989898",
      fontFamily: "Arial",
      fontSize: "1em",
      textAlign: "center",
      height: "2.43em",
    };
    return (
      <div style={timeStyle} className="timeslot">
        {this.props.dispHour}
      </div>
    );
  }
}
export default TimeslotLabel;
