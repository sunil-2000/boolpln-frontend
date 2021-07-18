import React from "react";
import Day from "./day.js";
import Submit from "./submit.js";
import TimeSlotLabel from "./time-slot-label.js";
import classes from "../../../styles/calendar/week.module.css";

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
      groupId: this.props.group,
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
        <TimeSlotLabel
          curHour={curHour}
          dispHour={dispHour}
          key={curHour}
        ></TimeSlotLabel>
      );
      curHour = (curHour + 1) % 24;
    }
    return labelsLst;
  }

  renderDaysWeek(days) {
    let today = new Date();

    let dayLst = [];

    for (let x = 0; x < days; x++) {
      let curDate = today.getDate();
      let curDay = today.getDay();
      var copiedDate = new Date(today.getTime());

      let end = x === days - 1 ? true : false;
      dayLst.push(
        <Day
          value={dateMap[curDay]}
          hours={13}
          end={end}
          date={curDate}
          full_date={copiedDate}
          month={month}
          year={year}
          key={curDate}
        ></Day>
      );

      today.setDate(today.getDate() + 1);
    }
    return dayLst;
  }

  render() {
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

    return (
      <>
        <div className={classes.calendarContainer}>
          <Submit></Submit>
          <div className={classes.monthContainer}>
            <h1 className={classes.monthText}>{displayMonth() + " " + year}</h1>
          </div>
          <div className={classes.weekContainer}>
            <div className={classes.timeLabelsContainer}>
              <div className={classes.timeLabelTag}></div>
              <div className={classes.timeLabelsColumn}>
                {this.renderLabels(12)}
              </div>
            </div>
            {this.renderDaysWeek(7)}
          </div>
        </div>
      </>
    );
  }
}
export default Week;
