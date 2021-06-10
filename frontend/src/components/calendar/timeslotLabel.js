import React from "react";

class TimeslotLabel extends React.Component {
  render() {
    const timeStyle = {
      color: "#989898",
      fontFamily: "Arial",
      fontSize: "1em",
      textAlign: "center",
    };
    return (
      <div style={timeStyle} className='timeslot-label'>
        {this.props.dispHour}
      </div>
    );
  }
}
export default TimeslotLabel;
