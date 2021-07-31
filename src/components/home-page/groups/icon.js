import { Component } from "react";
import classes from "../../../styles/groups/icon.module.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { selectGroup } from "../../../redux/actions/groupApiActions";
import { getCurrentGroup } from "../../../redux/reducers/groupApiReducer";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupID: this.props.id,
      name: this.props.name,
      members: this.props.members,
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectGroup(
      this.state.groupID,
      this.state.name,
      this.state.members
    );
    this.setState({ selected: true });
  }

  handleSelect() {
    if (
      this.props.currentGroup &&
      this.props.currentGroup.groupID === this.state.groupID
    ) {
      return true;
    } else return false;
  }

  render() {
    return (
      <Button
        className={this.handleSelect() ? classes.selected : classes.icon}
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
        checked={true}
      >
        {this.props.name}
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: getCurrentGroup(state),
  };
};

export default connect(mapStateToProps, { selectGroup })(Icon);
