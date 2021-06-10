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

    let curHour = today.getHours();
    for (let x = 0; x <= hours; x++) {
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
    const weekStyle = {
      marginTop: "10em",
      marginLeft: "0",
    };
    const labelsStyle = {
      // marginTop: "10em",
      justifyContent: "space-between",
      border: "1px solid #C4C4C4",
      borderRight: "none",
      display: "flex",
      rowGap: "1px",
    };
    const timeStyle = {
      borderBottom: "1px solid #C4C4C4",
      height: "4em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-end",
      fontSize: "2em",
      fontFamily: "Arial",
      color: "white",
      paddingBottom: "0.5em",
    };
    const weekContainerStyle = {
      margin: "auto",
      float: "right",
    };

    return (
      <div style={weekContainerStyle} className='week-container'>
        <div style={weekStyle} className='week'>
          <div style={labelsStyle} className='labels-container'>
            <div style={timeStyle} className='label-tag'>
              ALLDAY
            </div>
            {this.renderLabels(12)}
          </div>
          {this.renderDaysWeek(7)}
        </div>
      </div>
    );
  }
}
export default Week;
