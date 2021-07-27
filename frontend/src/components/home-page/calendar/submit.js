import { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "../../../styles/calendar/submit.module.css";
import { connect } from "react-redux";
import { getDayList } from "../../../redux/reducers/calendarReducer";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("in click");
    console.log(this.props);
    // move api call to redux getDays function
  }
  render() {
    return (
      <Button
        className={classes.button}
        variant='primary'
        size='lg'
        onClick={this.handleClick}
      >
        Submit
      </Button>
    );
  }
}

const mapStatetoProps = (state) => {
  const days = getDayList(state);
  return { days: days };
};

export default connect(mapStatetoProps)(Submit);
