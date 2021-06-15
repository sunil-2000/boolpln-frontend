import React from "react";
import Day from "./day.js";
import TimeslotLabel from "./timeslotLabel.js";

const dateMap = {
  0: "Sun",
  1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thurs",
  5: "Fri",
  6: "Sat",
};
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: null,
    };
  }
  renderLabels(hours) {
    let labelsLst = [];
    let curHour = 0;
    for (let x = 0; x < 24; x++) {
      // start at current hour dervived from date-time object (builtin)
      let dispHour;
      if (curHour <= 11 && curHour > 0) {
        dispHour = curHour + " AM";
      } else if (curHour === 12) {
        dispHour = curHour + " PM";
      } else if (curHour === 0) {
        dispHour = curHour + 12 + " AM";
      } else {
        dispHour = curHour - 12 + " PM";
      }

      labelsLst.push(
        <TimeslotLabel
          curHour={curHour}
          dispHour={dispHour}
          key={curHour}
        ></TimeslotLabel>
      );
      curHour = (curHour + 1) % 24;
    }
    return labelsLst;
  }

  renderDaysWeek(days) {
    let today = new Date();
    let curDate = today.getDate();
    let curHour = today.getHours();
    console.log(curHour);
    let curDay = today.getDay();
    let dayLst = [];
    for (let x = 0; x < days; x++) {
      if (x === days - 1) {
        dayLst.push(
          <Day
            value={dateMap[curDay]}
            hours={13}
            end={true}
            date={curDate}
            hour={curHour}
            month={month}
            year={year}
            key={curDate}
          ></Day>
        );
      } else {
        dayLst.push(
          <Day
            value={dateMap[curDay]}
            hours={13}
            end={false}
            date={curDate}
            hour={curHour}
            month={month}
            year={year}
            key={curDate}
          ></Day>
        );
      }
      curDay = (curDay + 1) % 7;
      curDate = today.getDate() + 1;
      today.setDate(today.getDate() + 1);
    }
    return dayLst;
  }

  render() {
    const timeStyle = {
      border: "1px solid #C4C4C4",
      borderRight: "none",
      height: "4em",
      display: "flex",
      flexShrink: "0",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "2em",
      fontFamily: "Arial",
      color: "#989898",
      paddingBottom: "0.5em",
    };

    function displayMonth() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[month];
    }
    const monthBarStyle = {};

    const weekContainerStyle = {
      margin: "auto",
      float: "right",
      marginBottom: "10px",
    };

    const calendarStyle = {
      margin: "auto",
      float: "right",
      marginBottom: "10px",
      backgroundColor: "#EEEEEE",
    };

    const monthNameStyle = {
      marginLeft: "0.5em",
      marginBottom: "0.25em",
      marginTop: "0",
      fontSize: "5em",
      fontFamily: "'Open Sans', sans-serif",
    };

    return (
      <div style={calendarStyle}>
        <div style={monthBarStyle}>
          <h1 style={monthNameStyle}>{displayMonth() + " " + year}</h1>
        </div>
        <div style={weekContainerStyle} className="week-container">
          <div className="labels-container">
            <div style={timeStyle} className="label-tag">
              <div>ALLDAY</div>
            </div>
            <div className="labels-column">{this.renderLabels(12)}</div>
          </div>
          {this.renderDaysWeek(7)}
        </div>
      </div>
    );
  }
}
export default Week;
