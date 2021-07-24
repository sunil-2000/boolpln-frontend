import { Component } from "react";
import { Button, Modal, FormControl, InputGroup } from "react-bootstrap";
import leaveGroup from "../../../redux/middleware/groups/leaveGroup";
import { getCurrentGroup } from "../../../redux/reducers/groupApiReducer";
import { connect } from "react-redux";

class LeaveGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      confirmed: false,
    };
    this.send = this.send.bind(this);
  }

  send() {
    const groupID = this.props.currentGroup
      ? this.props.currentGroup.groupID
      : null;
    if (groupID) {
      this.props.leaveGroup(groupID);
    } else {
      console.log("currentgroup is null");
    }
    this.props.handleClose();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant='success' onClick={this.send}>
            yes
          </Button>
          <Button variant='danger' onClick={this.props.handleClose}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: getCurrentGroup(state),
  };
};

export default connect(mapStateToProps, { leaveGroup })(LeaveGroup);
