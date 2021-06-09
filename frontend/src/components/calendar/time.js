import React from "react";

class Time extends React.Component {
  render() {
    const timeSlotStyle = {
      border: "1px dotted #616060",
      backgroundColor: this.props.fillColor,
      height: "1.5em",
      width: "4em",
    };
    return (
      <button
        className="time"
        onClick={this.props.onClick}
        style={timeSlotStyle}
        key={null}
      ></button>
    );
  }
}

export default Time;
