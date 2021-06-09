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
    const timeStyle = {
      color: "#989898",
      fontFamily: "Arial",
      fontSize: "1em",
      textAlign: "center",
    };
    labelsLst.push(
      <div style={timeStyle} className="label">
        {12 + " AM"}
      </div>
    );
    for (let x = 1; x < hours; x++) {
      labelsLst.push(
        <div style={timeStyle} className="label">
          {x + " AM"}
        </div>
      );
    }
    console.log(labelsLst);
    return labelsLst;
  }
  render() {
    const weekStyle = {
      marginLeft: "0.5em",
    };
    const labelsStyle = {
      marginTop: "5.5em",
      justifyContent: "space-between",
    };
    const timeStyle = {
      color: "#989898",
      fontFamily: "Arial",
      fontSize: "1em",
      textAlign: "center",
    };
    const weekContainerStyle = {
      margin: "0 auto",
    };
    return (
      <div style={weekContainerStyle} className="week-container">
        <div style={labelsStyle} className="labels-container">
          <div style={timeStyle} className="label-tag">
            ALL DAY
          </div>
          {this.renderLabels(12)}
        </div>
        <div style={weekStyle} className="week">
          <Day value="Mon" hours={12}></Day>
          <Day value="Tues" hours={12}></Day>
          <Day value="Wed" hours={12}></Day>
          <Day value="Thurs" hours={12}></Day>
          <Day value="Fri" hours={12}></Day>
          <Day value="Sat" hours={12}></Day>
          <Day value="Sun" hours={12}></Day>
        </div>
      </div>
    );
  }
}
export default Week;
