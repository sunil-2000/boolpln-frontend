import { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "../../../styles/calendar/submit.module.css";

class Submit extends Component {
  handleClick() {
    return null;
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
export default Submit;
