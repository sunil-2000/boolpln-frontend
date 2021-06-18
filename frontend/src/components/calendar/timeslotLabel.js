import React from "react";

class TimeSlotLabel extends React.Component {
  render() {
    return <div className='timeslot'>{this.props.dispHour}</div>;
  }
}
export default TimeSlotLabel;
