import React from "react";
import Day from "./day.js";

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: null,
    };
  }
  renderLabels(hours) {
    let labelsLst = [];
    for (let x = 0; x < hours; x++) {
      labelsLst.push(<div className='label'>{x}:00</div>);
    }
    console.log(labelsLst);
    return labelsLst;
  }
  render() {
    return (
      <div className='week-container'>
        <div className='labels-container'>
          <div className='label-tag'>Time</div>
          {this.renderLabels(12)}
        </div>
        <div className='week'>
          <Day value='Monday' hours={12}></Day>
          <Day value='Tuesday' hours={12}></Day>
          <Day value='Wednesday' hours={12}></Day>
          <Day value='Thursday' hours={12}></Day>
          <Day value='Friday' hours={12}></Day>
          <Day value='Saturday' hours={12}></Day>
          <Day value='Sunday' hours={12}></Day>
        </div>
      </div>
    );
  }
}
export default Week;
