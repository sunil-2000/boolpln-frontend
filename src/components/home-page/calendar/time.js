import React from "react";
import { OverlayTrigger, Popover, PopoverContent } from "react-bootstrap";
import { connect } from "react-redux";
import { newTime } from "../../../redux/actions/calendarActions";
import {
  getDayList,
  getGroupDayList,
} from "../../../redux/reducers/calendarReducer";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMemberList = this.handleMemberList.bind(this);
  }

  handleClick() {
    const week = this.props.week;
    const value = week[this.props.dayIndex][this.props.timeIndex];
    this.props.newTime(this.props.dayIndex, this.props.timeIndex, !value);
  }

  handleMemberList() {
    let members = null;
    const week = this.props.groupWeek;
    if (week.length > 0) {
      const day = week[this.props.dayIndex];
      if (day.length > 0) {
        members = day[this.props.timeIndex];
      }
    }

    let result = [];
    if (members !== null) {
      members.forEach((member) => {
        result.push(<div key={member}>{"@" + member}</div>);
      });
    }
    return result;
  }

  handleTimeGroupColor() {
    let fillColor = "";
    const groupWeek = [...this.props.groupWeek];
    if (groupWeek.length > 0) {
      const day = groupWeek[this.props.dayIndex];
      if (day.length > 0) {
        fillColor = day[this.props.timeIndex] !== null ? "green" : "";
      }
    }
    return { backgroundColor: fillColor };
  }

  render() {
    const selected = this.props.week[this.props.dayIndex][this.props.timeIndex];
    return (
      <OverlayTrigger
        placement='right'
        trigger={["hover", "focus"]}
        overlay={
          <Popover>
            <Popover.Title as='h3'>
              <strong>Others available</strong>
            </Popover.Title>
            <PopoverContent>{this.handleMemberList()}</PopoverContent>
          </Popover>
        }
      >
        <button
          className={selected ? "selected" : "time"}
          onClick={this.handleClick}
          style={
            !selected ? this.handleTimeGroupColor() : { backgroundColor: "" }
          }
          key={null}
        ></button>
      </OverlayTrigger>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    week: getDayList(state),
    groupWeek: getGroupDayList(state),
  };
};

export default connect(mapStateToProps, { newTime })(Time);
